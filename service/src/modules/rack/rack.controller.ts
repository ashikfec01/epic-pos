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
import { RackService } from './rack.service';
import { CreateRackDto } from './dto/create-rack.dto';
import { UpdateRackDto } from './dto/update-rack.dto';

@Controller('rack')
export class RackController {
  constructor(private readonly rackService: RackService) {}

  @Post()
  create(@Body() createRackDto: CreateRackDto) {
    return this.rackService.create(createRackDto);
  }

  @Get()
  async findAll(@Query('limit') limit: number, @Query('pageNumber')pageNumber: number) {
    try {
      console.log(limit, pageNumber)
      return await this.rackService.findAll(limit,pageNumber);
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rackService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRackDto: UpdateRackDto) {
    return this.rackService.update(id, updateRackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rackService.remove(id);
  }
}
