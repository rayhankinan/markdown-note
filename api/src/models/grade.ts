import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import Base from "@models/base";
import Major from "@models/major";
import Course from "@models/course";

@Entity()
class Grade extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    public semester: number;

    @Column()
    public majorId: number;

    @ManyToOne(() => Major, (major) => major.grades, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @OneToMany(() => Course, (course) => course.grade)
    readonly courses: Promise<Course[]>;
}

export default Grade;
