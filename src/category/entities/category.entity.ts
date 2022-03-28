import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    @AutoMap()
    Id: number;

    @Column()
    @AutoMap()
    Name: string;

}