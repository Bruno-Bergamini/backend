import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "emotions_reports"})
export class EmotionReportEntity {
  @PrimaryGeneratedColumn()
  emotion_report_id: number;
  @Column()
  user_id: number;
  @Column()
  timestamp: Date;
  @Column()
  emotion_level_id: number;
  @Column()
  message?: string;
}