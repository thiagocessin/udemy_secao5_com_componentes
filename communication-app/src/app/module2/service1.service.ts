import { Injectable } from '@angular/core';
import { Module1Module } from '../module1/module1.module';

@Injectable({
  providedIn: Module1Module//indica onde esse serviço será fornecido, root (app.module)
})
export class Service1Service {

  public num = 0;

  constructor() { 

    this.num= Math.round(Math.random()*1000);

  }
}
