import { Module } from '@nestjs/common';
import { ProductsModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    // ProductsModule,
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
