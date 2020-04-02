import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Result {
  data: Entry[];
  worldStats: Entry;
}

export interface Entry {
  country: string;
  countryInfo?: CountryInfo;
  countryCode: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion?: number;
  updated?: number;
  confirmed: number;
}

export interface CountryInfo {
  _id: number; // 840
  iso2: string; // "US"
  iso3: string; // "USA"
  lat: number; // 38
  long: number; // -97
  flag: string; // "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png"
}

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  private call = `https://corona-stats.online?format=json`;

  constructor(private httpClient: HttpClient) {}

  async getData(): Promise<Result[]> {
    return await this.httpClient.get<Result[]>(this.call).toPromise();
  }
}
