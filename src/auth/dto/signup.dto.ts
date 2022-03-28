import { AutoMap } from "@automapper/classes";
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class SignUpDto {


    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Firstname: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Lastname: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    BornDate: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Phonenumber: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Username: string;

    @IsString()
    @IsNotEmpty()
    @AutoMap()
    Password: string;
}