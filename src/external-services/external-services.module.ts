import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleSheetsService } from './google-sheets.service';

@Module({
  imports: [PrismaService],
  exports: [ExternalServicesModule],
  providers: [ExternalServicesModule, GoogleSheetsService],
})
export class ExternalServicesModule {}
