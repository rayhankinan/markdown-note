import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import Base from "@models/base";
import Major from "@models/major";
import Course from "@models/course";

@Entity()
class Lecturer extends Base {
    @PrimaryColumn()
    public name: string;

    @PrimaryColumn()
    public majorId: number;

    @ManyToOne(() => Major, (major) => major.lecturers, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @ManyToMany(() => Course, { cascade: true })
    @JoinTable({ name: "teaches" })
    public grades: Promise<Course[]>;
}

export default Lecturer;
