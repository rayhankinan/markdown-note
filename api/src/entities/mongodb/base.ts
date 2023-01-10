import {
    CreateDateColumn,
    DeleteDateColumn,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";

abstract class BaseMongoDB {
    @ObjectIdColumn()
    readonly id: ObjectID;

    @CreateDateColumn()
    readonly createdDate: Date;

    @UpdateDateColumn()
    readonly updatedDate: Date;

    @DeleteDateColumn()
    readonly deletedDate: Date;

    @VersionColumn()
    readonly version: number;
}

export default BaseMongoDB;
