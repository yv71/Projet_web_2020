import { LotGrains } from '../models/lotGrains.model';

export class Structure
{
  private id : number;
  private pleine : boolean;
  private lot : LotGrains;
  private volume : number;

  constructor(
    id : number, volume : number
  )
  {
    this.id = id;
    this.pleine = false;
    this.lot = null;
    this.volume = volume;
  }

  getId() : number
  {
    return this.id;
  }

  getPleine() : boolean
  {
    return this.pleine;
  }

  getVolume() : number
  {
    return this.volume;
  }

  setLot(lotGrains : LotGrains)
  {
    if(this.lot == null)
    {
      this.lot = lotGrains;
      this.pleine = true;
    }
  }

  removeLot()
  {
    this.pleine = false;
    this.lot = null;
  }

}
