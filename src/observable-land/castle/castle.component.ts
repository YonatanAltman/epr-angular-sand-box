import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';


export interface IKnight {
  name: string;
  flagColor: string;
}

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.scss']
})
export class CastleComponent implements OnInit {

 
  knights: IKnight[] = [];
 
  constructor() { }

  ngOnInit() {

  }
  listenAlarm(tower: string) {
    // save the king
    console.log(tower);

    if (tower) {
      this._paSystem.next(tower);
    }
  }
  goHome(e) {
    console.log(e);

  }

}
