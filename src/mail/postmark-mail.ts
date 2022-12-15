import { MailService } from "./mail.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostmarkMailService implements MailService {
    SendEmail(): string {
        return 'Postmark Mail'
    }
}