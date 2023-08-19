import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";
  
@Entity("durations")
export class Duration extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  id: string;

  @Column("text")
  duration: string;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid") 
  userId: string;

  @ManyToOne(() => User, user => user.durations)
  user: User;
}
