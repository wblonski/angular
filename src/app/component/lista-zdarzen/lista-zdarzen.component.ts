import { Component, OnInit } from '@angular/core';
import {ZdarzenieClientService, IListaZdarzen} from '../../services/zdarzenie-client.service';
@Component({
  selector: 'app-lista-zdarzen',
  template: `
    <h1 class="center">Lista zdarzeń w systemie</h1>
    <table >
      <tr>
        <th>ID </th>
        <th>Typ zdarzenia</th>
        <th>Nazwa Przedmiotu</th>
        <th>Placówka</th>
      </tr>
      <tr class="items" *ngFor="let z of zdarzenia">
        <td class="badge">{{z["idStr"]}}</td>
        <td>{{z["typZdarzenia"]["nazwa"]}}</td>
        <td>{{z["przedmiot"]["nazwa"]}}</td>
        <td>{{z["przedmiot"]["uzytkownik"]["nazwa"]}}</td>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class ListaZdarzenComponent implements OnInit {

  zdarzenia: IListaZdarzen;
  public errorMsg;

  constructor(private zdarzenieClientService: ZdarzenieClientService) {
  }

  ngOnInit(): void {
    this.zdarzenieClientService.getListaZdarzenAll()
      .subscribe(
        value => {
          this.zdarzenia = value;
        });
  }

}
