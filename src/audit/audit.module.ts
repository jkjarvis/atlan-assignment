import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuditService } from './audit.service';
import { ErrorLogService } from './error-log.service';

@Module({
  imports: [PrismaModule],
  exports: [AuditService, ErrorLogService],
  providers: [AuditService, ErrorLogService],
})
export class AuditModule {}
