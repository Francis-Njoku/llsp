import * as bcrypt from "bcryptjs";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
  OneToOne
} from "typeorm";

import { AccessCode } from "./AccessCode";
import { Transaction } from "./Transaction";
import { Duration } from "./Duration";
import { Instructor } from "./Instructor";
import { Course } from "./Course";
import { Review } from "./Review";
import { Enrollment } from "./Enrollment";

export enum Role {
  SuperAdmin = 'super admin',
  Admin = 'admin',
  Support = 'aupport',
  Individual = 'individual',
  Enterprise = 'interprise'
}

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50, nullable: true })
  firstname: string | null;

  @Column("varchar", { length: 50, nullable: true })
  lastname: string | null;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 14, nullable: true })
  phone: string | null;

  @Column("text", { nullable: true })
  password: string | null;

  @Column("varchar")
  role: Role; 

  @Column("varchar", { nullable: true })
  dob: string | null;

  @Column("text", { nullable: true })
  gender: string | null;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @Column("boolean", { default: false })
  onboarded: boolean;

  @Column("boolean", { default: false })
  suspended: boolean;

  @Column("boolean", { default: false })
  isLocked: boolean;

  @Column("varchar")
  createdOn: string;

  @Column("varchar", { nullable: true })
  updatedAt: string | null;

  @OneToMany(() => AccessCode, accessCode => accessCode.user)
  accessCodes: AccessCode[];

  @OneToOne(() => Transaction, transaction => transaction.user)
  transaction: Transaction;

  @OneToMany(() => Duration, duration => duration.user)
  durations: Duration[];

  @OneToMany(() => Instructor, instructor => instructor.user)
  instructors: Instructor[];

  @OneToMany(() => Course, course => course.user)
  courses: Course[];

  @OneToMany(() => Review, review => review.user)
  reviews: Review[];

  @OneToMany(() => Enrollment, enrollment => enrollment.user)
  enrollments: Enrollment[];

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}