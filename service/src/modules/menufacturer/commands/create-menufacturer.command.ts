import { ICommand } from "@nestjs/cqrs";
import { CreateMenufacturerDto } from "../dto/create-menufacturer.dto";

export class CreateMenufacturerCommand implements ICommand {
  constructor(public readonly dto:CreateMenufacturerDto ) {}
}