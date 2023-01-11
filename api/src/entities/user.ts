import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    TableInheritance,
} from "typeorm";
import Base from "@entities/base";

@Entity()
@TableInheritance({ column: "role" })
class User extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ unique: true })
    public username: string;

    @Column()
    public password: string;

    @Column({ nullable: true })
    public profile: string;
}

export default User;
