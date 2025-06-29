import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ItemsModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [ItemsService],
})
export class AppModule {}
