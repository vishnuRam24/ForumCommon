import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class FakedbService implements InMemoryDbService {
  createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import('rxjs').Observable<{}> | Promise<{}> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
