import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import Base from "@entities//base";
import Admin from "@entities/admin";
import Grade from "@entities/grade";
import Lecturer from "@entities/lecturer";
import Faculty from "@enum/faculty";

@Entity()
class Major extends Base {
    @PrimaryColumn()
    public prefix: number;

    @PrimaryColumn()
    public name: string;

    @Column({ type: "enum", enum: Faculty })
    public faculty: Faculty;

    @Column()
    public adminId: number;

    @ManyToOne(() => Admin, (admin) => admin.id, { cascade: true })
    @JoinColumn({ name: "adminId" })
    public admin: Promise<Admin>;

    @OneToMany(() => Grade, (grade) => grade.major)
    readonly grades: Promise<Grade[]>;

    @OneToMany(() => Lecturer, (lecturer) => lecturer.major)
    readonly lecturers: Promise<Lecturer[]>;
}

export default Major;
