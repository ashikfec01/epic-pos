import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports:[DatabaseModule, CqrsModule],
  controllers: [],
  providers: [],
  exports: [DatabaseModule,CqrsModule],
})
export class AppGlobalModule {}