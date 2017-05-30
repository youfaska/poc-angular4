import { Component, Input } from '@angular/core';
import { Intervention } from './intervention';

@Component({
  selector: 'intervention-detail',
  template: `
    <div *ngIf="intervention">
      <h2>{{intervention.numeroDIntervention}} details!</h2>
      <div><label>id: </label>{{intervention.codeIntervention}}</div>
      <div>
        <label>object de l'intervention: </label>
        <input [(ngModel)]="intervention.objetDeLIntervention" placeholder="objetDeLIntervention"/>
      </div>
    </div>
  `
})
export class InterventionDetailComponent {
  @Input() intervention: Intervention;
}