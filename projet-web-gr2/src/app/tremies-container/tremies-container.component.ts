import { Component, OnInit } from '@angular/core';
import { StructureComponent } from '../structure/structure.component';
import { Structure } from '../shared/models/structure.model';
import { SelectStructureService } from '../shared/services/select-structure.service';
import { LotGrains } from '../shared/models/lotGrains.model';
import { EnumTypeGrains } from '../shared/models/enumTypeGrains.model';

@Component({
  selector: 'app-tremies-container',
  templateUrl: './tremies-container.component.html',
  styleUrls: ['./tremies-container.component.css']
})
export class TremiesContainerComponent implements OnInit {

  tremies : StructureComponent[];
  tremiesModel : Structure[];

  constructor(private selectStructureService : SelectStructureService) {
    this.tremies = new Array();
  }

  ngOnInit(): void {
    this.selectStructureService.getTremies().subscribe((tremies:Structure[]) =>
    {
        this.tremiesModel = tremies;
    });
    for(let i =0; i < 2; i++)
    {
      let tremie = this.tremiesModel[i];
        this.tremies.push(new StructureComponent(tremie,true));
    }

///Permet de gérer les arrivées aléatoires
    setInterval( () => {
      let vide = false;
      //Si au moins une trémie est vide on peut test le déclenchement d'arrivée
      this.tremiesModel.forEach(function(tremie){
        if(!tremie.getPleine()) {
          vide = true;
        }
      });
      if(vide){
        let nb = this.getRandomInt(10000) +1;
        ///Basiquement 20% de chance d'avoir une arrivée (getRandomInt renvoie un nombre entre 0 et 9999, s'il est supérieur à 8000 on déclenche une arrivée)
        if(nb >= 8000){
          this.arriveeGrains();
        }
      }
      ///Temps en millisecondes, 10 000 = test toutes les 10 sec
    },10000)
  }

  arriveeGrains() : void
  {
    let aRemplir : Structure;
    if(this.tremiesModel[0].getPleine()){
      aRemplir = this.tremiesModel[1];
    }
    else {
      aRemplir = this.tremiesModel[0];
    }

    let lot = this.genRandomLot();
    aRemplir.setLot(lot);
    let msg = "Arrivée du lot de grain n°" + lot.getId().toString() + " de " + lot.getType() + ' et de ' + lot.getPoids().toString() + ' kg dans la trémie n°'  + aRemplir.getId().toString() + ' !';
    alert(msg);
  }

  genRandomLot() : LotGrains
  {
    let id  = this.getRandomInt(10000);
    let poids = this.getRandomInt(125) + 125;

    let nb_enum = this.getRandomInt(5);
    for(let i = 0; i < 10; i++){
      nb_enum = this.getRandomInt(5);
    }
    let type : EnumTypeGrains;
    switch(nb_enum){
      case 0 :{ type = EnumTypeGrains.ble; break;}
      case 1 :{ type = EnumTypeGrains.colza; break;}
      case 2 :{ type = EnumTypeGrains.houblon; break;}
      case 3 :{ type = EnumTypeGrains.mais; break;}
      case 4 :{ type = EnumTypeGrains.orge; break;}
    }
    return new LotGrains(id,poids,type);
  }

  getRandomInt(max) : number
  {
    return Math.floor(Math.random() * Math.floor(max));
  }

  selectTremie(id : number):void
  {
    this.selectStructureService.selectStructure(id-1);
  }


}
