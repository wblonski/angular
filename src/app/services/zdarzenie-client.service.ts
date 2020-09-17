import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as collections from '../../lib/LinkedList';

@Injectable({
  providedIn: 'root'
})
export class ZdarzenieClientService {
  constructor(private httpClient: HttpClient) {
  }

  public getZdarzenie(): Observable<IZdarzenie> {
    return this.httpClient.get<IZdarzenie>('http://127.0.0.1:8080/medservice/zdarzenia/10046');
  }

  public getListaZdarzenAll(): Observable<IListaZdarzen> {
    return this.httpClient.get<IListaZdarzen>('http://127.0.0.1:8080/medservice/zdarzenia');
  }

}

export interface Element {
  idStr: string;
  nazwa: string;
  mark: boolean;
  kod: number;
}

export interface Uzytkownik {
  idStr: string;
  nazwa: string;
  nazwaKrotka: string;
  nrUzytkownika: number;
  stan: string;
  uwagi: string;
}

export interface Osoba {
  idStr: string;
  nazwa: string;
  mark: boolean;
  imie: string;
  nazwisko: string;
  telefon: string;
  email: string;
  login: string;
  haslo: string;
  pracodawca: Uzytkownik;
  status: number;
  listaKomorekOsoby: object;
  ileKomorek: number;
  zalogowany: boolean;
  nazwiskoImie: string;
  nazwiskoInicjal: string;
}

export interface Przedmiot {
  idStr: string;
  nazwa: string;
  mark: boolean;
  autoPrzeglad: boolean;
  nrInwentarzowy: string;
  nrSeryjny: string;
  model: string;
  serwisNazwa: string;
  dataZakupu: number;
  dataUruchomienia: number;
  certyfikatCe: boolean;
  wartosc: number;
  sumaKosztow: number;
  dataPrzegladu: number;
  dataGwarancjiDo: number;
  opisTechniczny: string;
  opisZestawu: string;
  uwagiDoPrzedmiotu: string;
  paszport: boolean;
  datawycofania: number;
  dataSpisu: number;
  uwagiDoSpisu: string;
  ileZdarzen: number;
}

export interface IZdarzenie {
  idStr: string;
  nazwa: string;
  mark: boolean;
  dataZgloszenia: number;
  opisZgloszenia: string;
  opisCzynnosciObslugiZdarzenia: string;
  dziennikZdarzeniaText: string;
  kosztObslugiZdarzenia: number;
  dataZdarzenia: number;
  dataWidocznosciOd: number;
  dataGwarancjiDo: number;
  uwagiDoZdarzenia: string;
  czyPrzeglad: boolean;
  czyClosed: boolean;
  uwagiSerwisu: string;
  uwagiUsera: string;
  etapZdarzenia: Element;
  priorytetZdarzenia: Element;
  typZdarzenia: Element;
  autor: Osoba;
  serwisant: Osoba;
  przedmiot: Przedmiot;
}

export interface IListaZdarzen {
  lista: collections.ILinkedListNode<IZdarzenie>;
}
