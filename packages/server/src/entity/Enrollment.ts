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
  
  
@Entity("enrollments")
export class Enrollment extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") 
    id: string;
    
    @Column("uuid")
    courseId: string;

    @Column("boolean", { default: false })
    completed: boolean;

    @Column("boolean", { default: false })
    tested: boolean;

    @Column("double precision", { default: 0 })
    paid: number;
  
    @Column("uuid")
    userId: string;
  
    @Column("varchar")
    createdOn: string;

    @Column("varchar", { nullable: true })
    updatedAt: string | null;

    @ManyToOne(() => User, user => user.enrollments)
    user: User;
  
    @OneToOne(() => Course, course => course.enrollment)
    course: Course;
}