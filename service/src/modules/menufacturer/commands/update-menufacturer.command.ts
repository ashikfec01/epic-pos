import { ICommand } from "@nestjs/cqrs";
import { UpdateMenufacturerDto } from "../dto/update-menufacturer.dto";

export class UpdateMenufacturerCommand implements ICommand {
  constructor(public readonly dto: UpdateMenufacturerDto) {}
}