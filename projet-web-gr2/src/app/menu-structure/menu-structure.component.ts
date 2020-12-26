import { Component, OnInit } from '@angular/core';
import { Structure } from '../shared/models/structure.model';
import { EnumTypeStructure } from '../shared/models/enumTypeStructure.model';
import {SelectStructureService } from '../shared/services/select-structure.service';

@Component({
  selector: 'app-menu-structure',
  templateUrl: './menu-structure.component.html',
  styleUrls: ['./menu-structure.component.css']
})
export class MenuStructureComponent implements OnInit {

  private structure : Structure;

  constructor(private selectStructureService : SelectStructureService) { }

  ngOnInit(): void {
    this.selectStructureService.getStructure().subscribe((struct : Structure) =>
    {
      this.structure = struct;
    });
    }

  getStructure() : Structure
  {
    return this.structure;
  }

  sendToNext() : void
  {
    if(this.structure.getPleine()){
      let lot = this.structure.getLot();
      switch(this.structure.getType()){
        case (EnumTypeStructure.tremie) : {
          let cellSend : Structure = null;
          this.selectStructureService.getCellules().forEach(function(cellules){
            cellules.forEach(function(cellule){
              if(!cellule.getPleine() && cellule.getVolume() >= lot.getPoids())
              {
                cellSend = cellule;
              }
            });
          });
          if(cellSend != null){
            cellSend.setLot(lot);
            this.structure.removeLot();
            alert("Lot n°" + lot.getId().toString() + " transféré dans la cellule n°" + cellSend.getId().toString());
          }
          else{
            alert("Aucune cellule disponible pour accueillir ce lot !");
          }
          break;
        }
        case(EnumTypeStructure.cellule) : {
          let boisseauSend : Structure = null;
          this.selectStructureService.getBoisseaux().forEach(function(boisseaux){
            boisseaux.forEach(function(boisseau){
              if(!boisseau.getPleine() && boisseau.getVolume() >= lot.getPoids()){
                boisseauSend = boisseau;
              }
            });
          });
          if(boisseauSend != null){
            boisseauSend.setLot(lot);
            this.structure.removeLot();
            alert("Lot n°" + lot.getId().toString() + " transféré dans le boisseau n°" + boisseauSend.getId().toString());
          }
          else{
            alert("Aucun boisseau disponible pour accueillir ce lot !");
          }
          break;
        }
        case(EnumTypeStructure.boisseau) : {
          /// TRAITER ICI L ENVOIE VERS CLIENT ///
        }
      }

    }
  }

}
