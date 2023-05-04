import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-dto';
import { UserService } from './user.service';
import { IsPublic } from '../auth/is-public.decorator';
import { SignUpDto } from './dto/signup-dto';

@ApiTags('users')
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/test")
  test(): boolean {
    return true;
  }

  @IsPublic()
  @Post("/signup")
  signup(@Body() signupDto: SignUpDto): Promise<string> {
    return this.userService.signup(signupDto);
  }
  
  @IsPublic()
  @Post("/login")
  login(@Body() loginDto: LoginDto): Promise<string> {
    return this.userService.login(loginDto);
  }
}
