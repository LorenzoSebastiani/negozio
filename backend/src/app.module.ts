import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './models/auth/auth.module';
import { ProductModule } from './models/product/product.module';
import { AddressModule } from './models/address/address.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, AuthModule, ProductModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
