import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
export interface IKnight {
  name: string;
  id: number;
  price: number;
  hourseName: string;
  rank: 'A' | 'B' | 'C';

}
const PASSWORD = 'LLTK';
const KNIGHTS: IKnight[] = [
  { name: 'yonatan', id: 111, price: 4000, hourseName: 'suse', rank: 'A' },
  { name: 'harel', id: 122, price: 1030, hourseName: 'dr suse', rank: 'B' },
  { name: 'shirit', id: 161, price: 4000, hourseName: 'suse', rank: 'B' },
  { name: 'maayan', id: 511, price: 2000, hourseName: 'hoursy', rank: 'C' },
];
@Injectable({
  providedIn: 'root'
})
export class CastleService {

  private _paSystem = new BehaviorSubject<string>(undefined);
  private _knights$ = new ReplaySubject<IKnight>();
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
  public get knight$(): Observable<IKnight> {
    return this._knights$.asObservable();
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

  knockKnock(username, password) {
    if (password === PASSWORD) {
      const knight = KNIGHTS.find(k => k.name === username);
      if (!!knight) {

        this.newKnightEnter(knight);
      }
    }
  }
  newKnightEnter(knight: IKnight) {
    this._knights$.next(knight);

  }
}
