import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import Base from "@models/base";
import Major from "@models/major";
import Course from "@models/course";

@Entity()
class Grade extends Base {
    @PrimaryColumn()
    public semester: number;

    @PrimaryColumn()
    public majorId: number;

    @ManyToOne(() => Major, (major) => major.grades, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @OneToMany(() => Course, (course) => course.grade)
    readonly courses: Promise<Course[]>;
}

export default Grade;
