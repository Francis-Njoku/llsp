import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("instructors")
export class Instructor extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: true })
  pictureUrl: string | null; 
  
  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { nullable: true})
  linkedInUrl: string | null;

  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column("boolean", { default: false })
  featured: boolean;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User, user => user.instructors)
  user: User;
}
