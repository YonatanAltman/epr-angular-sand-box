import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IKnight, CastleService } from '../castle.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.scss']
})
export class KingComponent implements OnInit {

  public get knight$(): Observable<IKnight> {
    return this.castleService.knight$;
  }
  public get rank$(): Observable<string> {
    return this.castleService.knight$
      .pipe(
        map(k => k.rank)
      );
  }
  constructor(private castleService: CastleService) { }

  ngOnInit() {
    setTimeout(() => {

      this.knight$.subscribe(res => {
        console.log('after 10 sec', res);

      });
    }, 10000);

    this.knight$.subscribe(res => {
      console.log('right away', res);

    });

  }

}
