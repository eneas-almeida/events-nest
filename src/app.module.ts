import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'eventsnest',
            password: 'eventsnest',
            database: 'eventsnest',
            entities: [__dirname + '/**/infra/database/entities/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        PaymentsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
