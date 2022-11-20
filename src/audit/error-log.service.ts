import { Injectable, Logger } from '@nestjs/common';
import { ErrorLogType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ErrorLogService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: Logger,
  ) {}

  async create(status: ErrorLogType, metadata: any) {
    await this.prismaService.errorLog.create({
      data: {
        type: status,
        data: metadata,
      },
    });
  }
}
