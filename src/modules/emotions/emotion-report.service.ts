import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmotionReportEntity, } from './emotion-report.entity';
import { EmotionReportDto } from './dto/emotion-report-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EmotionReportService {
  constructor(
    @InjectRepository(EmotionReportEntity) 
    private emotionReportRepository: Repository<EmotionReportEntity>,
  ) {}

  createEmotionReport(emotionReportDto: EmotionReportDto, user_id: number) {
    return this.emotionReportRepository.save({...emotionReportDto, user_id, timestamp: new Date()});
  }
}
