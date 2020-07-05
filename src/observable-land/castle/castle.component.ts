import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CastleService } from '../castle.service';


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

  constructor(private service: CastleService) { }

  ngOnInit() {

  }
  listenAlarm(tower: string) {
    // save the king
    console.log('tower', tower);

    this.service.setAlarm(tower);
  }
  goHome(e) {
    console.log(e);

  }

}
