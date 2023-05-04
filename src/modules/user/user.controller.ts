import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
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

  @Post("/recover-password")
  recoverPassword(@Body() body: {newPassword: string}, @Req() req: any) {
    return this.userService.recoverPassword(body.newPassword, req.user.user_id);
  }

  @IsPublic()
  @Post("/send-recovery-email")
  sendRecoveryEmail(@Body() body: {email: string}) {
    return this.userService.sendRecoveryEmail(body.email);
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
