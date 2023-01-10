import { Column, Entity } from "typeorm";
import BaseMongoDB from "@entities/mongodb/base";

@Entity()
class File extends BaseMongoDB {
    @Column()
    public filename: string;

    @Column()
    public data: Buffer;
}

export default File;
