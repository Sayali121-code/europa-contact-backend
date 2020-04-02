import { Controller, Get, Post, Body } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from '../contacts/contacts.service';
//import

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  /*  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  } */

  @Post('create')
  async create(@Body() ReservationData: Contact): Promise<any> {
    return this.contactsService.create(ReservationData);
  }
}
