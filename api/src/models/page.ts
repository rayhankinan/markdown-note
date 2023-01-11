import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from "typeorm";
import Base from "@models/base";
import Course from "@models/course";

@Entity()
@Tree("closure-table")
class Page extends Base {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Index({ fulltext: true })
    @Column({ type: "text" })
    public content: string;

    @ManyToOne(() => Course, (course) => course.pages, { cascade: true })
    @JoinColumn({ name: "courseId" })
    public course: Promise<Course>;

    @TreeChildren()
    public children: Page[];

    @TreeParent()
    public parent: Page;
}

export default Page;
