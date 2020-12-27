import { LotGrains } from '../shared/models/lotGrains.model';
import { Client } from '../shared/models/client.model';

export class Camion {

  private numCamion : number;
  private plein : boolean;
  private lot : LotGrains;
  private destination : string;
  private localisation : string;
  private arrive : boolean;

  contructor (numCamion: number)
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
    return this.localisation();
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
      this.pleine = true;
    }
  }

  depotLot()
  {
    this.pleine = false;
    this.lot = null;
    this.destination = "Au silo"
  }

  deplacer(){
    this.arrive=false
    setTimeout(() => {
        this.arrive=true
        this.localisation=this.destination
    }, 30000);()
  }
}
