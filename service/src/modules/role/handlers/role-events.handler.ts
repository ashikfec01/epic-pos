import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { RoleCreatedEvent } from "../events/role-created.event";
import { RoleEvent } from "../events.name";
import { Injectable } from "@nestjs/common";
import { RoleService } from "../role.service";
import { GetRoleQuery } from "../queries/get-role.query";
import { Prisma } from "@prisma/client";
@Injectable()
export class RoleEventsHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly roleService: RoleService,
  ){}

  @OnEvent(RoleEvent.CREATE_SUCCESS, {async: true})
  handleRoleCreatedEvent(event) {
    console.table(event)
  }

  @OnEvent(RoleEvent.CREATE_ON_REQUEST,{async: true})
  async handleRoleCreatedRequestEvent(event: RoleCreatedEvent) {
    try {
      return await this.roleService.create(event.role)
    } catch (error) {
      console.table(error)
    }
    
   
  }

  @OnEvent(RoleEvent.FIND_ON_RESPONSE,{async: true})
  handleFindOneRoleEvent(event: Prisma.RoleCreateInput) {
    
    return event;
  }

  @OnEvent(RoleEvent.FIND_ON_REQUEST,{async: true})
  async handleRoleQueryEvent(event: GetRoleQuery) {
    // console.table(event)
    return await this.roleService.findOne(event.roleId);
  }
}