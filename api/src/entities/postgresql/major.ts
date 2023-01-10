import { Column, Entity, ManyToOne } from "typeorm";
import BasePostgreSQL from "@entities/postgresql/base";
import Admin from "@entities/postgresql/admin";
import Faculty from "@enum/faculty";

@Entity()
class Major extends BasePostgreSQL {
    @Column()
    public name: string;

    @Column({ type: "enum", enum: Faculty })
    public faculty: Faculty;

    @ManyToOne(() => Admin, (admin) => admin.id, { cascade: true })
    public admin: Promise<Admin>;
}

export default Major;
