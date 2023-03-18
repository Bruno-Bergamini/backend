import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }
}
