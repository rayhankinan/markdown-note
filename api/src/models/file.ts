import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import Base from "@models/base";
import { Binary } from "mongodb";

@Entity()
class File extends Base {
    @ObjectIdColumn()
    readonly id: ObjectID;

    @Column({ type: "varchar", length: 255, unique: true })
    public filename: string;

    @Column()
    public data: Buffer;
}

export default File;
