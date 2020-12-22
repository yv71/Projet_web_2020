import { EnumTypeGrains } from '../models/enumTypeGrains.model';

export class LotGrains
{
  private id : number;
  private poids : number;
  private typeGrains : EnumTypeGrains;

  constructor(
    id : number, poids : number, type: EnumTypeGrains
  )
  {
    this.id = id;
    this.typeGrains = type;
    this.poids = poids;
  }

  getId() : number
  {
    return this.id;
  }

  getPoids() : number
  {
    return this.poids;
  }

  getType() : EnumTypeGrains
  {
    return this.typeGrains;
  }
}
