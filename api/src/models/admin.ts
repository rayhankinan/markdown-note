import { ChildEntity, Column, OneToMany } from "typeorm";
import User from "@models/user";
import Major from "@models/major";
import Role from "@enum/role";

@ChildEntity()
class Admin extends User {
    @Column({ type: "enum", enum: Role, default: Role.ADMIN })
    readonly role: Role;

    @OneToMany(() => Major, (major) => major.admin)
    readonly manages: Promise<Major[]>;
}

export default Admin;
