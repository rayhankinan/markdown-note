import { ChildEntity, Column, OneToMany } from "typeorm";
import User from "@entities/postgresql/user";
import Major from "@entities/postgresql/major";
import Role from "@enum/role";

@ChildEntity()
class Admin extends User {
    @Column({ type: "enum", enum: Role, default: Role.ADMIN })
    readonly role: Role;

    @OneToMany(() => Major, (major) => major.admin)
    readonly manages: Promise<Major[]>;
}

export default Admin;
