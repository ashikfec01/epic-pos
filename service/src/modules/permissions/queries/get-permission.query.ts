import { IQuery } from "@nestjs/cqrs";

export class GetPermissionQuery implements IQuery {
  constructor(public readonly permission_id: string) {}
}