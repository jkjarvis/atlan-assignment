import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectFormController } from './collect-form/collect-form.controller';
import { CollectFormModule } from './collect-form/collect-form.module';
import { AuditModule } from './audit/audit.module';
import { ExternalServicesModule } from './external-services/external-services.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    CollectFormModule,
    AuditModule,
    ExternalServicesModule,
    PrismaModule,
  ],
  controllers: [AppController, CollectFormController],
  providers: [AppService],
})
export class AppModule {}
