import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input()//atributo fica passível de mudança através do componente
  name : string;

  @Input()
  lastName : string;

  @Input()
  age:number;


  clients:Client[];

  constructor() { }

  ngOnInit() {

    this.clients = [
      {id:1, name:'Bob',age:30},
      {id:2, name:'Ana',age:20},
      {id:3, name:'John',age:40},
      {id:4, name:'Maria',age:30}
      
    ]
  }

}
