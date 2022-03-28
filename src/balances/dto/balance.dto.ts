import { AutoMap } from "@automapper/classes";
import { IsBoolean, IsNumber, IsObject, IsString } from "class-validator";
import { Category } from "src/category/entities/category.entity";

export class BalanceDto {

    @IsNumber()
    @AutoMap()
    Amount: number;

    @IsObject()
    category: Category;

    @IsString()
    @AutoMap()
    AddedDate: string;

    @IsBoolean()
    @AutoMap()
    IsDebit: boolean;

    @IsNumber()
    @AutoMap()
    UserId: number;
}