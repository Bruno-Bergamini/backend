import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmotionReportController } from './emotion-report.controller';
import { EmotionReportEntity } from './emotion-report.entity';
import { EmotionReportService } from './emotion-report.service';
@Module({
  imports: [TypeOrmModule.forFeature([EmotionReportEntity])],
  controllers: [EmotionReportController],
  providers: [EmotionReportService]
})
export class EmotionReportModule {}
