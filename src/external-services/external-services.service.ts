import { Injectable } from '@nestjs/common';
import { CollectFormService } from '../collect-form/collect-form.service';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleSheetsService } from './google-sheets.service';

@Injectable()
export class ExternalServicesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: Logger,
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly collectFormService: CollectFormService,
  ) {}

  // a trigger to all external services which afterDate parameter if we want to get data after a specific date
  async triggerServices(customerId: number, afterDate?: Date) {
    const formResponses = await this.collectFormService.getAllForCustomer(
      customerId,
      afterDate,
    );

    for (const res of formResponses) {
      await this.googleSheetsService.create(customerId, res.data);
    }
  }
}
