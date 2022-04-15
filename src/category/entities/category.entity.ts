import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @AutoMap()
    @Column()
    Name: string;

}