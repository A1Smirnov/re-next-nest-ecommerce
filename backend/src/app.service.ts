import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'TESTING NestJS and PostgreSQL !!!';
  }
}

