import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'; // Замените на свой путь к модели User
import { PrismaService } from '../prisma/prisma.service'; // Или ваш способ доступа к базе данных

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {} // Замените на ваш способ инициализации

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createUserDto: { email: string; password: string; role: string }): Promise<User> {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }
}
