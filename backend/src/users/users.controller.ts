import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'This will return all users';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This will return user with ID: ${id}`;
    }

    @Post()
    create(@Body() createUserDto: any) {
        return 'This will create a new user';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: any) {
        return `This will update user with ID: ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This will delete user with ID: ${id}`;
    }
}
