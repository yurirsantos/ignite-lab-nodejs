import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNotification(): string {
    return 'Hello World!';
  }
}
