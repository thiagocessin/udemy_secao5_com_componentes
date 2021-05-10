import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() { 

    console.log('    Check:child : constructor');
  }

  ngOnInit() {
    console.log('    Check:child :ngOnInit');
    }
  
    ngOnChanges(){
      console.log('    Check:child :ngOnChanges');
  
    }
  
    //fazer sua própria checagem se o componente sofreu alteração
    ngDoCheck(){
      console.log('    Check:child :ngDoCheck');
    }
  
    ngAfterContentInit(){
  
      console.log('    Check:child :ngAfterContentInit');
    }
  
    ngAfterContentChecked(){
      console.log('    Check:child :ngAfterContentChecked');
  
    }
  
    ngAfterViewInit(){
      console.log('    Check:child :ngAfterViewInit');
    }
  
    ngAfterViewChecked(){
      console.log('    Check:child :ngAfterViewChecked');
    }
  
    ngOnDestroy(){
      console.log('    Check:child :ngOnDestroy');
    }



}
