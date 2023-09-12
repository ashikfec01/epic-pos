import { IQuery } from "@nestjs/cqrs";

export class GetCategoryListQuery implements IQuery {
  constructor(public readonly queryDto) {}
}