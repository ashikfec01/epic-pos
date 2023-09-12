import { ICommand } from "@nestjs/cqrs";

export class RemoveWarehouseCommand implements ICommand {
  constructor(public readonly warehouseId: string) {}
}