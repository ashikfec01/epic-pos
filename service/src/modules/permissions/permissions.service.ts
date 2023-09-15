import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreatePermissionCommand } from './commands/create-permission.command';
import { GetProductListQuery } from '../product/queries/get-product-list.query';
import { AbstractService } from "../../infrastructure/abstracts/AbstractService";
import { GetPermissionQuery } from './queries/get-permission.query';
import { UpdatePermissionCommand } from './commands/update-permission.command';

@Injectable()
export class PermissionsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ){}
  async create(createPermissionDto: CreatePermissionDto) {
    try {
      return await this.commandBus.execute(new CreatePermissionCommand(createPermissionDto))
    } catch (error) {
      return error;
    }
  }

  async findAll(limit: number, pageNumber:number) {
    try {
      return await this.queryBus.execute(new GetProductListQuery(limit, pageNumber))
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.queryBus.execute(new GetPermissionQuery(id));
    } catch (error) {
      return error
    }
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto) {
    try {
      return await this.commandBus.execute(new UpdatePermissionCommand(id, updatePermissionDto))
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.queryBus.execute(new GetPermissionQuery(id));
    } catch (error) {
      return error
    }
  }
}
