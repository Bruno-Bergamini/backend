import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';
require('dotenv').config()

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.DATABASE,
    entities: [UserEntity],
    synchronize: false,
  }), UserModule],
})
export class AppModule {
}
