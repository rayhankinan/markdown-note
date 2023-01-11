import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import Base from "@models/base";

@Entity()
class File extends Base {
    @ObjectIdColumn()
    readonly id: ObjectID;

    @Column({ unique: true })
    public filename: string;

    @Column()
    public data: Buffer;
}

export default File;
