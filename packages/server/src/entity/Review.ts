import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne
} from "typeorm";
import { Course } from "./Course";
import { User } from "./User";

@Entity("reviews")
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("int")
  rating: number;

  @Column("varchar", { length: 750 })
  feedback: string;

  @Column("uuid")
  courseId: string;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid")
  userId: string;

  @OneToOne(() => Course, course => course.review)
  course: Course;

  @ManyToOne(() => User, user => user.reviews)
  user: User;
}
