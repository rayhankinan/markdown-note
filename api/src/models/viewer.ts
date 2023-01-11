import { ChildEntity, Column } from "typeorm";
import User from "@models/user";
import Role from "@enum/role";

@ChildEntity()
class Viewer extends User {
    @Column({ type: "enum", enum: Role, default: Role.VIEWER })
    readonly role: Role;
}

export default Viewer;
