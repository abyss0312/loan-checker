import { AutoMap } from "@automapper/classes";
import { IsString } from "class-validator";


export class CategoryDto{

    @AutoMap()
    @IsString()
    Name: string;
}