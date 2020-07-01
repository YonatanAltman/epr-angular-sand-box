import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
    return this.pa.pipe(
      startWith('sss')
    );
  }
  message: string;
  @Input() name: string;
  @Input() pa: Observable<string>;
  @Output() alarm = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // this.alarm.emit(this.name);
    this.pa.subscribe(() => console.log(this.name));


    // setTimeout(() => {
    //   if (this.name !== 'A') {

    //     sub.unsubscribe();
    //   }
    //   // the guard fell asleep
    // }, 5000);
  }
  setAlarm() {
    this.alarm.emit(this.name);
  }
}
