import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CastleService } from '../castle.service';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss']
})
export class TowerComponent implements OnInit {
  sernum = '123456789';
  money = 430;
  knghit = 'aRthOr';
  date = new Date();
  public get message$(): Observable<string> {
    return this.castleService.pa;
  }
  message: string;
  @Input() name: string;

  constructor(private castleService: CastleService) { }

  ngOnInit() {
    this.castleService.pa.subscribe(res => {
      console.log(res);

    });

  }
  setAlarm() {
    this.castleService.setAlarm(this.name);
  }
}
