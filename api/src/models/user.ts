import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    TableInheritance,
} from "typeorm";
import Base from "@models/base";

@Entity()
@TableInheritance({ column: "role" })
class User extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: "varchar", length: 255, unique: true })
    public username: string;

    @Column({ type: "varchar", length: 255 })
    public password: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    public profile: string;
}

export default User;
