import { Injectable } from '@nestjs/common';
import { CreateMenufacturerDto } from './dto/create-menufacturer.dto';
import { UpdateMenufacturerDto } from './dto/update-menufacturer.dto';

@Injectable()
export class MenufacturerService {
  create(createMenufacturerDto: CreateMenufacturerDto) {
    return 'This action adds a new menufacturer';
  }

  findAll() {
    return `This action returns all menufacturer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menufacturer`;
  }

  update(id: number, updateMenufacturerDto: UpdateMenufacturerDto) {
    return `This action updates a #${id} menufacturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} menufacturer`;
  }
}
