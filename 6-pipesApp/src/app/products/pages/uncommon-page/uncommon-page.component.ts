import { Component } from '@angular/core';
import { Observable, interval, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //* i18n Select
  public name: string = 'Dante';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //*i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernado', 'Jaime'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient(): void {
    this.clients.shift();
  }

  //*KeyValue Pipe
  public person = {
    name: 'Dante',
    age: 22,
    address: 'Lima, Rimac',
  };

  //* Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos Data en la Promesa');
    }, 3500);
  });
}
