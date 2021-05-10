import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


export interface LifecycleEvent{
  id:number;
  name: string;
  color:string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifecycleEvent[] = [];
  nextEventId : number = 0;

  colors:string[] = ["accent", "primary","warn"];

  private intervalRef = null;

  //primeio método a ser executado
  constructor() { 
    console.log(this.name + "- constructor");
    this.newEvent("constructor");
    this.intervalRef = setInterval(()=>{console.log('interval')},2000);
  }
  
  //quando há mudança será o primeiro método a ser executado
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.name + "- ngOnChanges");
    this.newEvent("ngOnChanges")

    for(let propName in changes){
      console.log(changes[propName]);
    }
/*
    if(changes['name']){
      console.log("new name"+ changes['name'].currentValue);
    }*/
  }

  //sempre incializar os campos de input aqui, nunca no construtor
  ngOnInit() {
    console.log(this.name + "- ngOnInit");
    this.newEvent("ngOnInit")

  }

  ngOnDestroy(){
    console.log(this.name + "- ngOnDestroy");
    this.newEvent("ngOnDestroy");
    clearInterval(this.intervalRef);

  }

  ngAfterContentInit(){
    console.log(this.name + "- ngAfterContentInit");
    this.newEvent("ngAfterContentInit")

  }
  //após toda a parte visual ser inicializada
  //todos os componentes já estão inicializados (componentes filhos também)
  ngAfterViewInit(){
    console.log(this.name + "- ngAfterViewInit");
    this.newEvent("ngAfterViewInit")

  }

  newEvent(name:string){
    let id = this.nextEventId++;

    this.events.push({
      id:id,
      color:this.colors[id%this.colors.length], 
      name:name
    });

    setTimeout(()=>{
      let idx = this.events.findIndex((e)=> e.id==id);
      if(idx >=0){
        this.events.splice(idx,1);
      }

    },3000 + this.events.length *2000);
  }

}
