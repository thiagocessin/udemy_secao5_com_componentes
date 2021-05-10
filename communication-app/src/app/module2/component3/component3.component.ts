import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import {Service1Service} from '../service1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  num = 0;
  text = "";

  constructor(
    private myService1: Service1Service,
    private myService2: Service2
    ) { 
    
  }

  ngOnInit() {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}
