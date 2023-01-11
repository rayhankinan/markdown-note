import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from "typeorm";
import Base from "@models/base";

@Entity()
@Tree("closure-table")
class Page extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Index({ fulltext: true })
    @Column({ type: "text" })
    public content: string;

    @TreeChildren()
    public children: Page[];

    @TreeParent()
    public parent: Page;
}

export default Page;
