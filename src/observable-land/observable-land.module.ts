import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleComponent } from './castle/castle.component';
import { TowerComponent } from './tower/tower.component';
import { GateComponent } from './gate/gate.component';
import { KingComponent } from './king/king.component';
import { ObservableLandRoutingModule } from './observable-land-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CastleComponent, TowerComponent, GateComponent, KingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ObservableLandRoutingModule
  ]
})
export class ObservableLandModule { }
