import { ICommand } from "@nestjs/cqrs";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export class UpdateCategoryCommand implements ICommand {
  constructor(public readonly dto: UpdateCategoryDto) {}
}