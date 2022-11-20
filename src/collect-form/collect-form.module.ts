import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CollectFormService } from './collect-form.service';

@Module({
  imports: [PrismaModule],
  providers: [CollectFormService],
  exports: [CollectFormService],
})
export class CollectFormModule {}
