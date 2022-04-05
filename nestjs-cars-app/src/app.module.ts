// import { Connection } from 'typeorm';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,
      debug: true,
      // playground: process.env.NODE_ENV === 'development' ? true : false,
      // debug: process.env.NODE_ENV === 'development' ? true : false,
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
