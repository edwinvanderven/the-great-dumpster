import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Result {
  data: Entry[];
  worldStats: Entry;
}

export interface Entry {
  country: string;
  province: string;
  countryCode: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  confirmedByDay: number[];
  recoveredByDay: number[];
  deathsByDay: number[];
  lastUpdated: string;
  active: number;
  mortalityPer: string;
  recoveredPer: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  private call = `https://corona-stats.online?source=2&format=json`;

  constructor(private httpClient: HttpClient) {}

  async getData(): Promise<Result[]> {
    return await this.httpClient.get<Result[]>(this.call).toPromise();
  }
}
