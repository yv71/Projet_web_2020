import { Component, OnInit } from '@angular/core';
import { Structure } from '../shared/models/structure.model';
import { EnumTypeStructure } from '../shared/models/enumTypeStructure.model';
import {SelectStructureService } from '../shared/services/select-structure.service';
import { Camion } from '../shared/models/camion.model';
import { SelectCamionService} from '../shared/services/select-camion.service';

@Component({
  selector: 'app-menu-structure',
  templateUrl: './menu-structure.component.html',
  styleUrls: ['./menu-structure.component.css']
})
export class MenuStructureComponent implements OnInit {

  private structure : Structure;

  constructor(private selectStructureService : SelectStructureService, private selectCamionService : SelectCamionService) { }

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
      let tailleInsuffisante = true;
      switch(this.structure.getType()){
        case (EnumTypeStructure.tremie) : {
          let cellSend : Structure = null;
          this.selectStructureService.getCellules().forEach(function(cellules){
            cellules.forEach(function(cellule){
              if(!cellule.getPleine() && cellule.getVolume() >= lot.getPoids())
              {
                cellSend = cellule;
                tailleInsuffisante = false;
              }
            });
          });
          if(cellSend != null){
            cellSend.setLot(lot);
            this.structure.removeLot();
            alert("Lot n°" + lot.getId().toString() + " transféré dans la cellule n°" + cellSend.getId().toString());
          }
          else{
            if(tailleInsuffisante)
            {
              alert("Aucune cellule de taille suffisante pour ce lot n'est disponible !");
            }
            else
            {
            alert("Aucune cellule disponible pour accueillir ce lot !");
            }
          }
          break;
        }
        case(EnumTypeStructure.cellule) : {
          let boisseauSend : Structure = null;
          this.selectStructureService.getBoisseaux().forEach(function(boisseaux){
            boisseaux.forEach(function(boisseau){
              if(!boisseau.getPleine()){
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
          let camionSend : Camion = null;
          this.selectCamionService.getCamions().forEach(function(camions){
            camions.forEach(function(camion){
              if(!camion.getPlein()){
                camionSend = camion;
              }
            });
          });
          if(camionSend !=  null){
            camionSend.setLot(lot);
            this.structure.removeLot();
            alert("Lot n°"+ lot.getId().toString() + " transféré dans le camion n°" + camionSend.getNumCamion().toString());
          }
          else{
            alert("Aucun camion disponible pour accueillir ce lot !");
          }
          break;
        }
      }

    }
  }

}
