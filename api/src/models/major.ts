import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import Base from "@models/base";
import Admin from "@models/admin";
import Grade from "@models/grade";
import Lecturer from "@models/lecturer";
import Faculty from "@enum/faculty";

@Entity()
class Major extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    public prefix: number;

    @Column({ type: "varchar", length: 255 })
    public name: string;

    @Column({ type: "enum", enum: Faculty })
    public faculty: Faculty;

    @ManyToOne(() => Admin, (admin) => admin.id, { cascade: true })
    @JoinColumn({ name: "adminId" })
    public admin: Promise<Admin>;

    @OneToMany(() => Grade, (grade) => grade.major)
    readonly grades: Promise<Grade[]>;

    @OneToMany(() => Lecturer, (lecturer) => lecturer.major)
    readonly lecturers: Promise<Lecturer[]>;
}

export default Major;
