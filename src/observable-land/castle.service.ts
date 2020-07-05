import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastleService {
  private _paSystem = new Subject<string>();
  public get pa(): Observable<string> {
    return this._paSystem.asObservable();
  }
  constructor() { }
}
