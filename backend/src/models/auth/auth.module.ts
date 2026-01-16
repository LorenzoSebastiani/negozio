import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { JwtStrategy } from '../../strategies/jwt.strategy';

@Module({
  imports: [JwtModule.register({
    secret: 'SUPER_SECRET_KEY',
    signOptions: { expiresIn: '1h' }
  }), TypeOrmModule.forFeature([User])],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
