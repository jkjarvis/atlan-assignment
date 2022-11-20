import { Body, Controller, Get } from '@nestjs/common';
import { AuditEntity } from '@prisma/client';
import { AuditService } from '../audit/audit.service';
import { CollectFormService } from './collect-form.service';
import { CollectFormResponseDto } from './dto/collect-form-response.dto';

@Controller('collect-form')
export class CollectFormController {
  constructor(
    private readonly collectFormService: CollectFormService,
    private readonly auditService: AuditService,
  ) {}
  @Get(`webhook`)
  async storeCollectFormResponse(
    @Body() collectFormResponseDto: CollectFormResponseDto,
  ) {
    //creating audits
    await this.auditService.create(
      AuditEntity.FORM_RESPONSE,
      collectFormResponseDto,
    );

    //creating form responses
    for (const item of collectFormResponseDto._items) {
      await this.collectFormService.create(item);
    }

    return;
  }
}
