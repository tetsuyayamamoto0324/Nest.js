import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [ItemsService],
})
export class AppModule {}
