import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-dto';
import { UserEntity } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as emailValidator from 'email-validator'
import CustomError from '../../utils/CustomError'
import { SignUpDto } from './dto/signup-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  hashPassword(password: string) {
    return bcrypt.hash(password, 10)
  }

  signUserId(user_id: number) {
    return this.jwtService.sign({user_id: user_id}, {secret: process.env.JWT_SECRET})
  }

  async signup(signUpDto: SignUpDto): Promise<string> {
    if (!emailValidator.validate(signUpDto.email)) {
      throw new CustomError(422, "Invalid e-mail");
    }
    if (await this.userRepository.findOneBy({email: signUpDto.email})) {
      throw new CustomError(409, "This e-mail is already registered");
    }
    const hashedPassword = await this.hashPassword(signUpDto.password);
    const user = await this.userRepository.save({email: signUpDto.email, name: signUpDto.name, password: hashedPassword, user_type_id: 1});
    return this.signUserId(user.user_id);
  }

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.userRepository.findOneBy({email: loginDto.email})
    if (user && await bcrypt.compare(loginDto.password, user.password)) {
      return this.signUserId(user.user_id);
    }
    throw new CustomError(401, "Invalid e-mail or password");
  }
}
