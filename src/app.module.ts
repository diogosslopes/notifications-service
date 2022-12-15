import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './http.module';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostmarkMailService

    }
  ],
})
export class AppModule {}
 