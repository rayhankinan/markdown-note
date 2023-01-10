import { Column, Entity, TableInheritance } from "typeorm";
import BasePostgreSQL from "@entities/postgresql/base";

@Entity()
@TableInheritance({ column: "role" })
class User extends BasePostgreSQL {
    @Column({ unique: true })
    public username: string;

    @Column()
    public password: string;

    @Column({ nullable: true })
    public profile: string;
}

export default User;
