import { AutoMap } from "@automapper/classes";
import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Balance {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @AutoMap()
    Amount: number;

    @AutoMap({ typeFn: () => Category })
    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @Column()
    @AutoMap()
    AddedDate: string;

    @Column()
    @AutoMap()
    IsDebit: boolean;

    @Column()
    @AutoMap()
    UserId: number;

}