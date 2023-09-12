import { ICommand } from "@nestjs/cqrs";

export class RemoveCategoryCommand implements ICommand {
  constructor(public readonly categoryId: string ) {}
}