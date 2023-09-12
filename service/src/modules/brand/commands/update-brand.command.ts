import { ICommand } from "@nestjs/cqrs";
import { UpdateBrandDto } from "../dto/update-brand.dto";

export class UpdateBrandCommand implements ICommand {
  constructor(public readonly brandId: string, public readonly brandUpdateDto: UpdateBrandDto){}
}