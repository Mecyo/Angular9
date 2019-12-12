import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAngular';
  enable = false;

  agenda: Contato[] = [
    {
      name: 'João',
      phone: '33713529',
      address: 'Rua 1',
      age: 25,
    },
    {
      name: 'Eu',
      phone: '988263541',
      address: 'Travessa Jorge Amado',
      age: 34,
    },
    {
      name: 'Maria',
      phone: '987456956',
      address: 'Rua 3',
      age: 54,
    }
  ];
}

export interface Contato {
  name: string;
  phone: string;
  address: string;
  age: number;
}

