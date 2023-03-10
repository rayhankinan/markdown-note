import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import Base from "@models/base";
import Major from "@models/major";
import Course from "@models/course";

@Entity()
class Lecturer extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: "varchar", length: 255 })
    public name: string;

    @Column()
    public majorId: number;

    @Column({ nullable: true, type: "varchar", length: 255 })
    public email: string;

    @Column({ nullable: true, type: "varchar", length: 255 })
    public phone: string;

    @ManyToOne(() => Major, (major) => major.lecturers, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @ManyToMany(() => Course, { cascade: true })
    @JoinTable({ name: "teaches" })
    public grades: Promise<Course[]>;
}

export default Lecturer;
