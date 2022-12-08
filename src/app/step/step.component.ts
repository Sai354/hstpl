import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  geeks: MenuItem[] =[];
  gfg: number = 1;
  constructor(){}
  ngOnInit() {
    this.geeks = [
      { label: "PrimeNG" },
      { label: "AngularJS" },
      { label: "ReactJS" },
      { label: "HTML" },
    ];
  }

  chan() {
    this.gfg += 1;
  }
}