import { Component, OnInit } from '@angular/core';
import {ZdarzenieClientService, IZdarzenie} from '../../services/zdarzenie-client.service';

@Component({
  selector: 'app-zdarzenie',
  template: `
    <p>
      Ala ma kota burego.
    </p>

  `,
  styles: []
})

export class ZdarzenieComponent implements OnInit {

  rootObject: IZdarzenie;

  constructor(private zdarzenieClientService: ZdarzenieClientService) {
  }

  ngOnInit(): void {
    this.zdarzenieClientService.getZdarzenie()
      .subscribe(
        value => {
          this.rootObject = value;
        });
  }
}
