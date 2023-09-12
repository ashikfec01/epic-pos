import { Module } from '@nestjs/common';
import { RackService } from './rack.service';
import { RackController } from './rack.controller';
import { CreateRackCommandHandler } from './handlers/create-rack-command.handler';
import { UpdateRackCommandHandler } from './handlers/update-rack-command.handler';
import { GetRackListQueryHandler } from './handlers/get-rack-list-query.handler';
import { GetRackQueryHandler } from './handlers/get-rack-query.handler';
import { DatabaseModule } from 'service/src/infrastructure/database/database.module';
import { RemoveRackCommandHandler } from './handlers/remove-rack-command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateRackEventHandler } from './handlers/create-rack-event.handler';

@Module({
  imports: [DatabaseModule,CqrsModule],
  controllers: [RackController],
  providers: [
    RackService,
    CreateRackCommandHandler,
    UpdateRackCommandHandler,
    GetRackListQueryHandler,
    GetRackQueryHandler,
    RemoveRackCommandHandler,
    CreateRackEventHandler
  ],
})
export class RackModule { }
