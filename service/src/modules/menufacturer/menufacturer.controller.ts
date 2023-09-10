import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenufacturerService } from './menufacturer.service';
import { CreateMenufacturerDto } from './dto/create-menufacturer.dto';
import { UpdateMenufacturerDto } from './dto/update-menufacturer.dto';

@Controller('menufacturer')
export class MenufacturerController {
  constructor(private readonly menufacturerService: MenufacturerService) {}

  @Post()
  create(@Body() createMenufacturerDto: CreateMenufacturerDto) {
    return this.menufacturerService.create(createMenufacturerDto);
  }

  @Get()
  findAll() {
    return this.menufacturerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menufacturerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMenufacturerDto: UpdateMenufacturerDto
  ) {
    return this.menufacturerService.update(+id, updateMenufacturerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menufacturerService.remove(+id);
  }
}
