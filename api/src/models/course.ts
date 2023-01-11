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
import Lecturer from "@models/lecturer";
import Grade from "./grade";

@Entity()
class Course extends Base {
    @PrimaryColumn({ type: "varchar", length: 255 })
    public code: string;

    @PrimaryColumn({ type: "varchar", length: 255 })
    public name: string;

    @Column({ type: "text", nullable: true })
    public description: string;

    @ManyToMany(() => Lecturer, { cascade: true })
    @JoinTable({ name: "teaches" })
    public lecturers: Promise<Lecturer[]>;

    @ManyToOne(() => Grade, (grade) => grade.courses, { cascade: true })
    @JoinColumn({ name: "gradeId" })
    public grade: Promise<Grade>;
}

export default Course;
