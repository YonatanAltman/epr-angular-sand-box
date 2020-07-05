import { Component, OnInit } from '@angular/core';
import { CastleService } from '../castle.service';
export type TPassword = 'password' | 'text';
@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit {
  password = 'LLTK';
  nickname = 'yonatan';
  passwordType: TPassword = 'password';
  constructor(private castle: CastleService) { }

  ngOnInit() {
  }
  show() {
    const type = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordType = type;
  }
  knockKnock() {
    console.log('KNOCKKNOCK!!!!');

    if (this.nickname && this.password) {

      this.castle.knockKnock(this.nickname, this.password);
    }
  }
}
