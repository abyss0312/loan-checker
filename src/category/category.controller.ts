import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {

    constructor(
        private categoryService: CategoryService
    ){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async GetAll(){
        return await this.categoryService.AllCategory();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async CreateCategory(@Body() categorydto:CategoryDto){
        return await this.categoryService.CreateCategory(categorydto);
    }
}
