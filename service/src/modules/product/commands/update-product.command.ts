import { ICommand } from "@nestjs/cqrs";
import { UpdateProductDto } from "../dto/update-product.dto";

export class UpdateProductCommand implements ICommand {
  constructor(
    public readonly product_id: string,
    public readonly dto: UpdateProductDto 
    ) {}
}