import { Injectable, Logger } from '@nestjs/common';
import { ErrorLogType } from '@prisma/client';
import { ErrorLogService } from '../audit/error-log.service';
import { PrismaService } from '../prisma/prisma.service';
const { google } = require('googleapis');
const sheets = google.sheets('v4');

@Injectable()
export class GoogleSheetsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorLogService: ErrorLogService,
    private readonly logger: Logger,
  ) {}

  // a method to call googleSheets API with expected body content. Since we need an OAuth token, it will pick the token
  // from the table.
  // We can create an api to accept OAuth tokens from customers and store in AWS SSM
  async create(customerId: number, data: any) {
    const accessToken = await this.prismaService.googleSheets.findUnique({
      where: {
        customer_id: customerId,
      },
    });

    if (!accessToken) {
      this.logger.error(
        `Could not find google sheets access token for custoerId: ${customerId}`,
      );
      return;
    }

    const authClient = await authorize();
    const request = {
      resource: {
        // TODO: Add desired properties to the request body.
      },

      auth: authClient,
    };

    try {
      const response = (await sheets.spreadsheets.create(request)).data;
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2));
    } catch (err) {
      this.logger.error(err);
      await this.errorLogService.create(ErrorLogType.ERROR, err);
    }
  }
}
