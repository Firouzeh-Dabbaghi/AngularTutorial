import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes-alert',
  templateUrl: './succes-alert.component.html',
  styles: [`
  p{
      padding: 20px;
      background-Color:palegreen;
      border:1px solid green;
  }`]
})
export class SuccesAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
