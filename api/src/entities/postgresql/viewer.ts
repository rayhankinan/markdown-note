import { ChildEntity, Column } from "typeorm";
import User from "@entities/postgresql/user";
import Role from "@enum/role";

@ChildEntity()
class Viewer extends User {
    @Column({ type: "enum", enum: Role, default: Role.VIEWER })
    readonly role: Role;
}

export default Viewer;
