import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { EmotionReportEntity } from './modules/emotions/emotion-report.entity';
import { EmotionReportModule } from './modules/emotions/emotion-report.module';
require('dotenv').config()

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.DATABASE,
    entities: [UserEntity, EmotionReportEntity],
    synchronize: false,
  }), UserModule, EmotionReportModule],
  providers: [{provide: APP_GUARD, useClass: AuthGuard}, JwtService]
})
export class AppModule {
}
