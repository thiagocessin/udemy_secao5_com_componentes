import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  //@ViewChild(TimerComponent)
  //private myTimer: TimerComponent;//pega somente o primeiro componente que é encontrado no template e injeta na classe

  @ViewChild("stopwatch2")
  private myTimer: TimerComponent;

  @ViewChild("myP")
  private myP : ElementRef;

  constructor() { }

  ngOnInit() {
  }


  start(){
    this.myTimer.start();
  }

  stop(){
    this.myTimer.stop();
  }

  clear(){
    this.myTimer.clear();
  }

  ngAfterViewInit(){

    console.log(this.myP);


  }

}
