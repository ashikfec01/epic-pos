import { ICommand } from "@nestjs/cqrs";
import { CreateWarehouseDto } from "../dto/create-warehouse.dto";

export class CreateWarehouseCommand implements ICommand {
  constructor(public readonly dto:CreateWarehouseDto ) {}
}