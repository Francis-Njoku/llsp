import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne
} from "typeorm";
import { User } from "./User";

export enum Status {
  Pending = 'pending',
  Complete = 'complete'
}

@Entity("transactions")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  id: string;

  @Column("double precision")
  amount: number;

  @Column("varchar")
  reference: string;

  @Column("text")
  reason: string;

  @Column("text", { default: Status.Pending }) 
  status: Status;

  @Column("text", { default: "NGN" })
  currency: string;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid") 
  userId: string;

  @OneToOne(() => User, user => user.transaction)
  user: User;
}