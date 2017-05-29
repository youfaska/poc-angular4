import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `,
  providers: [],
  styleUrls: ['./app.component.css']
})

export class KeyUpComponent_v3 {
  value = '';
  values = '';
  onEnter(value: string) { this.value = value; }
}
