import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3000', // frontend permission
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        credentials: true, // Cookie
    });

    await app.listen(5000);
    console.log(`Backend is running on http://localhost:5000`);
}
bootstrap();

console.log(`Testing console - Entry Point`)