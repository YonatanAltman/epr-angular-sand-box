import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastleService {
  private _paSystem = new BehaviorSubject<string>(undefined);
  private _paOldSystem = new Observable<string>(observer => {
    observer.next('A');
    observer.next('B');
    observer.next('c');
    observer.complete();
    observer.next('D');
  });
  public get pa(): Observable<string> {
    return this._paSystem.asObservable();
  }

  constructor() {
    this._paSystem.subscribe(res => {
      console.log('_paSystem', res);

    });


  }

  public setAlarm(tower: string) {
    if (!!tower && tower.length === 1) {
      // this._paOldSystem; <= there is not NEXT method;
      this._paSystem.next(tower);
    }

  }
}
