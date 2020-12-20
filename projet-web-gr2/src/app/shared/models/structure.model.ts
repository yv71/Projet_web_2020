import { LotGrains } from '../models/lotGrains.model';
import { EnumTypeStructure } from './enumTypeStructure.model';

export class Structure
{
  private id : number;
  private pleine : boolean;
  private lot : LotGrains;
  private volume : number;
  private type : EnumTypeStructure;

  constructor(
    id : number, volume : number, type: EnumTypeStructure
  )
  {
    this.id = id;
    this.pleine = false;
    this.lot = null;
    this.volume = volume;
    this.type = type;
  }

  getId() : number
  {
    return this.id;
  }

  getType() : EnumTypeStructure
  {
    return this.type;
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

  getLot() : LotGrains
  {
    return this.lot;
  }

  removeLot()
  {
    this.pleine = false;
    this.lot = null;
  }

}
