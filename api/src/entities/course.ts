import { Entity, PrimaryColumn } from "typeorm";
import Base from "@entities/base";

@Entity()
class Course extends Base {
    @PrimaryColumn()
    public code: string;

    @PrimaryColumn()
    public name: string;
}

export default Course;
