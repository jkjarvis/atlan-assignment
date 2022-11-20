import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CollectFormResponse } from './types';

@Injectable()
export class CollectFormService {
    constructor(private readonly prismaService: PrismaService,
    private readonly logger: Logger) { }

    async create(data: CollectFormResponse) {
        this.logger.log(`Creating CollectResponse for customerId: ${customerId}, formId: ${data.formId}, responseId: ${data.responseId} `)
        await this.prismaService.collectResponse.create{
            data: {
                data: data.answers,
                form_id: data.formId,
                response_id: data.responseId
            }
      }
    }

    async getAllForCustomer(customerId: number, afterDate?: Date) {
        return await this.prismaService.collectResponse.findMany({
            where: {
                customer_id: customerId,
                created_at: {
                    gt: afterDate
                }
            }
        })
    }
}
