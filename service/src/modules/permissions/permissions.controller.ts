import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) { }

  @Post()
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    try {
      return await this.permissionsService.create(createPermissionDto);
    } catch (error) {
      throw new Error(error)
    }
  }

  @Get()
  async findAll(@Query('limit')limit: number,@Query('pageNumber') pageNumber:number) {
    try {
      return await this.permissionsService.findAll(limit, pageNumber);
    } catch (error) {
      throw new Error(error)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.permissionsService.findOne(id);
    } catch (error) {
      throw new Error(error)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    try {
      return await this.permissionsService.update(id, updatePermissionDto);
    } catch (error) {
      throw new Error(error)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.permissionsService.remove(id);
    } catch (error) {
      throw new Error(error)
    }
  }
}
