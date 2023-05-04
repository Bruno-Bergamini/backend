import { ApiProperty } from "@nestjs/swagger";

export class EmotionReportDto {
    @ApiProperty()
    emotion_level_id: number;
    @ApiProperty()
    message: string;
}