import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService

    }
  ],
    
})
export class HttpModule {}
 