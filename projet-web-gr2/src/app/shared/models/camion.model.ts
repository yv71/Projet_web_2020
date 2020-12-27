import { LotGrains } from './lotGrains.model';
import { Client } from './client.model';
import { collectExternalReferences } from '@angular/compiler';

export class Camion {

  private numCamion : number;
  private plein : boolean;
  private lot : LotGrains;
  private destination : string;
  private localisation : string;
  private arrive : boolean;

  constructor (numCamion: number)
  {
    this.numCamion=numCamion;
    this.plein=false;
    this.lot=null;
    this.destination=null;
    this.localisation="Au silo";
    this.arrive=true;
  }

  getNumCamion() : number
  {
    return this.numCamion
  }

  getPlein() : boolean
  {
    return this.plein;
  }

  getDestination() : string
  {
    return this.destination;
  }

  setDestination(dest : string)
  {
    this.destination = dest;
  }

  getLocalisation() : string
  {
    return this.localisation;
  }

  getArrive() : boolean
  {
    return this.arrive;
  }

  getLot() : LotGrains
  {
    return this.lot;
  }

  setLot(lotGrains : LotGrains)
  {
    if(this.lot == null)
    {
      this.lot = lotGrains;
      this.plein = true;
    }
  }

  /*
  depotLot()
  {
    this.plein = false;
    this.lot = null;
    this.destination = "Au silo";
  }*/

  deplacer(){
    this.arrive=true;
    this.localisation=this.destination
    setTimeout(() => {
        this.arrive=false;
        this.localisation = "Au silo";
        this.lot = null;
        this.plein = false;
    }, 5000);
  }
}
