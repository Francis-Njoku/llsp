import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("accessCodes")
export class AccessCode extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  code: string;

  @Column("int")
  unit: number;

  @Column("double precision")
  amount: number;

  @Column("boolean", { default: false })
  isExpired: boolean;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User, user => user.accessCodes)
  user: User;
}
