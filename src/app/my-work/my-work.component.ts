import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAngular = true;
  showJavascript = true;
  aktiveButton= 1;


  showAll() {
    this.showAngular = true;
    this.showJavascript = true;
    this.aktiveButton= 1;
  }

  show1(){
    this.showAngular = false;
    this.showJavascript = true;
    this.aktiveButton = 2;
  }
  
  show2(){
    this.showAngular = true;
    this.showJavascript = false;
    this.aktiveButton= 3;
  }
}
