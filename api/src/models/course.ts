import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import Base from "@models/base";
import Lecturer from "@models/lecturer";
import Grade from "@models/grade";
import Page from "@models/page";

@Entity()
class Course extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: "varchar", length: 255 })
    public code: string;

    @Column({ type: "varchar", length: 255 })
    public name: string;

    @Column({ type: "text", nullable: true })
    public description: string;

    @ManyToMany(() => Lecturer, { cascade: true })
    @JoinTable({ name: "teaches" })
    public lecturers: Promise<Lecturer[]>;

    @ManyToOne(() => Grade, (grade) => grade.courses, { cascade: true })
    @JoinColumn({ name: "gradeId" })
    public grade: Promise<Grade>;

    @OneToMany(() => Page, (page) => page.course)
    readonly pages: Promise<Page[]>;
}

export default Course;
