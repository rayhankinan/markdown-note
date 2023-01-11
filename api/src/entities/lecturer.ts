import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import Base from "@entities/base";
import Major from "entities/major";
import Grade from "entities/grade";

@Entity()
class Lecturer extends Base {
    @PrimaryColumn()
    public name: string;

    @PrimaryColumn()
    public majorId: number;

    @ManyToOne(() => Major, (major) => major.lecturers, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @ManyToMany(() => Grade)
    @JoinTable({ name: "teaches" })
    public grades: Promise<Grade[]>;
}

export default Lecturer;
