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
  
  
@Entity("bookmarks")
export class Bookmark extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") 
    id: string;
    
    @Column("uuid")
    courseId: string;
  
    @Column("uuid")
    userId: string;
  
    @Column("varchar")
    createdOn: string;

    @Column("varchar", { nullable: true })
    updatedAt: string | null;

    @ManyToOne(() => User, user => user.bookmarks)
    user: User;
  
    @OneToOne(() => Course, course => course.bookmark)
    course: Course;
}