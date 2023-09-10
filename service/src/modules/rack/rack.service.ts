import { Injectable } from '@nestjs/common';
import { CreateRackDto } from './dto/create-rack.dto';
import { UpdateRackDto } from './dto/update-rack.dto';

@Injectable()
export class RackService {
  create(createRackDto: CreateRackDto) {
    return 'This action adds a new rack';
  }

  findAll() {
    return `This action returns all rack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rack`;
  }

  update(id: number, updateRackDto: UpdateRackDto) {
    return `This action updates a #${id} rack`;
  }

  remove(id: number) {
    return `This action removes a #${id} rack`;
  }
}
