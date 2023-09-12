import { ICommand } from "@nestjs/cqrs";
import { UpdateSupplierDto } from "../dto/update-supplier.dto";

export class UpdateSupplierCommand implements ICommand {
  constructor(public readonly supplierId: string, public readonly supplierDto: UpdateSupplierDto ) {}
}