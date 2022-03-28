import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericResponse } from 'src/shared/models/response/generic.response';
import { mapper } from 'src/shared/profiles/main';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ){}

    async AllCategory() :Promise<GenericResponse<Category[]>>{

        const response = new GenericResponse<Category[]>();

        try{
            const listCategory = await this.categoryRepo.find();
    
            response.Code=200;
            response.Data=listCategory;
            response.Message= 'Correcto';
            response.ValidateResult = true;

        }catch(ex){
            response.Code=500;
            response.Data=ex.Message;
            response.Message= 'Error Getting List of  Categories';
            response.ValidateResult = false;
        } 

       

        return response;
    }

  

    async CreateCategory(dto:CategoryDto): Promise<GenericResponse<string>>{

        const response = new GenericResponse<string>();
        try{
            const categoryMap = mapper.map(dto,Category,CategoryDto);
            const categoryRes = this.categoryRepo.create(categoryMap);
            await this.categoryRepo.save(categoryRes);
            response.Code=201;
            response.Data='Creado correcto';
            response.Message= 'Correcto';
            response.ValidateResult = true;

        }catch(ex){
            response.Code=500;
            response.Data=ex;
            response.Message= 'Error Adding category';
            response.ValidateResult = false;
        }

        return response ;

    }
}
