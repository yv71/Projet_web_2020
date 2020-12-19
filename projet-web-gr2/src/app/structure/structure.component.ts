import { Component, OnInit } from '@angular/core';
import { Structure } from '../shared/models/structure.model';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  private isBig : boolean;
  private statut : string;
  private structure : Structure;

  constructor() {
    this.isBig = true;
    this.structure = new Structure(12, 725);
    if(this.structure.getPleine())
    {
      this.statut = "pleine";
    }
  }

  ngOnInit(): void {
  }

  getStatut() : boolean
  {
    return this.statut;
  }

  getIsBig(): boolean
  {
    return this.isBig;
  }

  getStructure() : Structure
  {
    return this.structure;
  }


}
