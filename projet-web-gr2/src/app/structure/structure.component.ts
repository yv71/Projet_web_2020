import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(struct : Structure, @Inject(Boolean) big) {
    this.isBig = big;
    this.structure = struct;
    if(this.structure.getPleine())
    {
      this.statut = "pleine";
    }
    else
    {
      this.statut = "vide";
    }
  }

  ngOnInit(): void {
  }

  getStatut() : string
  {
    if(this.structure.getPleine())
    {
      this.statut = "pleine";
    }
    else
    {
      this.statut = "vide";
    }
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
