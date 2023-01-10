import {
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";

abstract class BasePostgreSQL {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @CreateDateColumn()
    readonly createdDate: Date;

    @UpdateDateColumn()
    readonly updatedDate: Date;

    @DeleteDateColumn()
    readonly deletedDate: Date;

    @VersionColumn()
    readonly version: number;
}

export default BasePostgreSQL;
