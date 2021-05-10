import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {

  @Input()
  name:string;

  nameBefore:string;

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey:string]:SimpleChange}){
    //console.log(changes);

    if(changes.hasOwnProperty('name')){//se a mudança foi nessa propriedade
      this.nameBefore = changes['name'].previousValue;
    }
  }

}
