import { AutoMap } from "@automapper/classes";
import { IsNotEmpty, IsString } from "class-validator"


export class AuthDto {
    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Username: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Password: string;
}