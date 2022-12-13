import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// eslint-disable-next-line prettier/prettier
import {randomUUID} from 'node:crypto'
import { CreateNotificationBoby } from './create-notification-boby';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBoby) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
