import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/cats'),CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
