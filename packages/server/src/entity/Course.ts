import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne
} from "typeorm";
import { Enrollment } from "./Enrollment";
import { Review } from "./Review";
import { User } from "./User";

export enum Type {
  Individual = 'individual',
  Enterprise = 'enterprise'
}

@Entity("courses")
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  id: string;

  @Column("text", { nullable: true })
  pictureUrl: string | null; 

  @Column("text")
  title: string;

  @Column("varchar", { nullable: true, length: 350 })
  summary: string | null;

  @Column("text")
  description: string;

  @Column("text")
  duration: string;

  @Column("text")
  type: string;

  @Column("double precision")
  price: number;

  @Column("double precision", { nullable: true })
  discount: number;

  @Column("uuid")
  instructorId: string;

  @Column("boolean", { default: false })
  bespokeAvailability: boolean;

  @Column("text")
  assessmentType: string;

  @Column("text")
  learningObjectives: string;

  @Column("varchar")
  trainingDates: string;

  @Column("varchar", { nullable: true })
  link: string | null;

  @Column("text", { nullable: true })
  venue: string | null;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid") 
  userId: string;

  @ManyToOne(() => User, user => user.courses)
  user: User;

  @OneToOne(() => Review, review => review.course)
  review: Review;

  @OneToOne(() => Enrollment, enrollment => enrollment.course)
  enrollment: Enrollment;
}
