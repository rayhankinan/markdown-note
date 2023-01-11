import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import Base from "@entities/base";

@Entity()
class File extends Base {
    @ObjectIdColumn()
    readonly id: ObjectID;

    @Column()
    public filename: string;

    @Column()
    public data: Buffer;
}

export default File;
