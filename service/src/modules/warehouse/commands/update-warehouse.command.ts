import { ICommand } from "@nestjs/cqrs";
import { UpdateWarehouseDto } from "../dto/update-warehouse.dto";

export class UpdateWarehouseCommand implements ICommand {
  constructor(
    public readonly warehouseId: string,
    public readonly dto: UpdateWarehouseDto,
  ) { }
}