import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BasePostgreSQL from "@entities/postgresql/base";
import Admin from "@entities/postgresql/admin";
import Faculty from "@enum/faculty";

@Entity()
class Major extends BasePostgreSQL {
    @Column({ unique: true })
    public prefix: number;

    @Column({ unique: true })
    public name: string;

    @Column({ type: "enum", enum: Faculty })
    public faculty: Faculty;

    @Column()
    public adminId: number;

    @ManyToOne(() => Admin, (admin) => admin.id, { cascade: true })
    @JoinColumn({ name: "adminId" })
    public admin: Promise<Admin>;
}

export default Major;
