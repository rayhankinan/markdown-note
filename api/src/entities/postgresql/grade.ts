import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import BasePostgreSQL from "@entities/postgresql/base";
import Major from "@entities/postgresql/major";

@Entity()
class Grade extends BasePostgreSQL {
    @PrimaryColumn()
    public majorId: number;

    @Column({ unique: true })
    public code: string;

    @Column()
    public name: string;

    @ManyToOne(() => Major, (major) => major.id, { cascade: true })
    @JoinColumn({ name: "majorId" })
    public major: Promise<Major>;
}

export default Grade;
