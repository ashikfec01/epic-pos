import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';

@Global()
@Module({
  imports:[DatabaseModule],
  controllers: [],
  providers: [],
  exports: [DatabaseModule],
})
export class AppGlobalModule {}