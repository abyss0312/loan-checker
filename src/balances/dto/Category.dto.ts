import { AutoMap } from "@automapper/classes";

export class CategoryBalanceDto {

    @AutoMap()
    Id:number;

    @AutoMap()
    Name: string;
}