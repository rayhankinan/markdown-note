import {
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import Base from "@entities/base";
import Major from "entities/major";
import Lecturer from "entities/lecturer";

@Entity()
class Grade extends Base {
    @PrimaryColumn()
    public semester: number;

    @PrimaryColumn()
    public majorId: number;

    @ManyToOne(() => Major, (major) => major.grades, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;

    @ManyToMany(() => Lecturer)
    @JoinTable({ name: "teaches" })
    public lecturers: Promise<Lecturer[]>;
}

export default Grade;
