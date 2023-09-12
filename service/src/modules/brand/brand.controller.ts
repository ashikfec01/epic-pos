import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async create(@Body() createBrandDto: CreateBrandDto) {
    try {
      return await this.brandService.create(createBrandDto);
    } catch (error) {
      throw new Error(error) ;
    }
  }

  @Get()
  async findAll(@Query('limit')limit: number, @Query('pageNumber') pageNumber: number) {
    try {
      return await this.brandService.findAll(limit, pageNumber);
    } catch (error) {
      throw new Error(error) 
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.brandService.findOne(id);  
    } catch (error) {
      throw new Error(error) 
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    try {
      return await this.brandService.update(id, updateBrandDto);
    } catch (error) {
      throw new Error(error) 
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.brandService.remove(id);
    } catch (error) {
     throw new Error(error) 
    }
  }
}
