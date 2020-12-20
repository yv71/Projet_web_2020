import { Injectable } from '@angular/core';
import { Structure } from '../models/structure.model';
import { BehaviorSubject } from 'rxjs';
import { EnumTypeStructure } from '../models/enumTypeStructure.model';

@Injectable()
export class SelectStructureService {
  private cellules: BehaviorSubject<Structure[]> = new BehaviorSubject([
    new Structure(1,250, EnumTypeStructure.cellule),
    new Structure(2,125, EnumTypeStructure.cellule),
    new Structure(3,125, EnumTypeStructure.cellule),
    new Structure(4,125, EnumTypeStructure.cellule),
    new Structure(5,125, EnumTypeStructure.cellule),
    new Structure(6,125, EnumTypeStructure.cellule),
    new Structure(7,125, EnumTypeStructure.cellule),
    new Structure(8,250, EnumTypeStructure.cellule)
  ]);

  private tremies: BehaviorSubject<Structure[]> = new BehaviorSubject([
    new Structure(9,250, EnumTypeStructure.tremie),
    new Structure(10,250, EnumTypeStructure.tremie)
  ]);

  private boisseaux: BehaviorSubject<Structure[]> = new BehaviorSubject([
    new Structure(11,250, EnumTypeStructure.boisseau),
    new Structure(12,250, EnumTypeStructure.boisseau)
  ]);

  private structure : BehaviorSubject<Structure> = new BehaviorSubject(new Structure(-1,-1, EnumTypeStructure.cellule));
  private idSelected = -1;

  getCellules():BehaviorSubject<Structure[]>
  {
    return this.cellules;
  }

  getTremies():BehaviorSubject<Structure[]>
  {
    return this.tremies;
  }

  getBoisseaux():BehaviorSubject<Structure[]>
  {
    return this.boisseaux;
  }

  getStructure():BehaviorSubject<Structure>
  {
    return this.structure;
  }

  selectStructure(id : number): void
  {
    if(id == this.idSelected)
    {
        this.idSelected = -1;
        this.structure.next(new Structure(-1,-1, EnumTypeStructure.cellule));
    }
    else{
      if(id <8)
      {
        this.structure.next(this.cellules.value[id]);
      }
      else if(id < 10)
      {
        this.structure.next(this.tremies.value[id-8]);
      }
      else
      {
        this.structure.next(this.boisseaux.value[id-10]);
      }
      this.idSelected = id;
    }
  }

  constructor() { }
}
