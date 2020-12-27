import { Injectable } from '@angular/core';
import { Camion } from '../models/camion.model'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectCamionService {

  private camions : BehaviorSubject<Camion[]> = new BehaviorSubject([
    new Camion(1),
    new Camion(2)
  ]);
  private camion : BehaviorSubject<Camion> = new BehaviorSubject(new Camion(-1));
  private idSelected = -1;

  getCamion():BehaviorSubject<Camion>{
    return this.camion;
  }

  getCamions():BehaviorSubject<Camion[]>{
    return this.camions;
  }

  selectCamion(id : number){
    if(id == this.idSelected)
    {
        this.idSelected = -1;
        this.camion.next(new Camion(-1));
    }
    else{
      this.camion.next(this.camions.value[id]);
      this.idSelected=id;
    }
  }
  constructor() { }
}
