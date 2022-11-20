import { Injectable, Logger } from '@nestjs/common';
import { AuditEntity } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: Logger,
  ) {}

  async create(type: AuditEntity, data: any) {
    this.logger.log(`Creating Aduti for Entity: ${type}, data: ${data}`);

    const items = data.map((i) => {
      return { entity: type, data: i };
    });

    await this.prismaService.audit.createMany(items);
  }
}
