import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmotionReportService } from './emotion-report.service';
import { EmotionReportDto } from './dto/emotion-report-dto';
import { EmotionReportEntity } from './emotion-report.entity';

@ApiTags('emotion-report')
@Controller("emotion-report")
export class EmotionReportController {
  constructor(private readonly emotionReportService: EmotionReportService) {}

  @Post("/register-emotion-report")
  createEmotion(@Body() emotionReportDto: EmotionReportDto, @Req() req: any): Promise<EmotionReportEntity> {
    return this.emotionReportService.createEmotionReport(emotionReportDto, req.user.user_id);
  }
}
