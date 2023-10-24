import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-edit-page',
  templateUrl: './client-edit-page.component.html',
  styleUrls: ['./client-edit-page.component.css']
})
export class ClientEditPageComponent {
  client: Client
    // get the client ID from the query params
    // then get the client details
    = new Client;
  // get the client ID from the query params

  // then get the client details

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    const clientId = this.route.snapshot.paramMap.get('id')
    this.clientService.getClientByID(clientId == null ? " " : clientId).subscribe((result: Client) => {
      console.log(result)
      this.client = result;
    });
  }

}
