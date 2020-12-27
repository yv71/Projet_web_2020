import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande.model';
import { EnumTypeGrains } from '../shared/models/enumTypeGrains.model';
import { LotGrains } from '../shared/models/lotGrains.model';

@Component({
  selector: 'app-commandes-container',
  templateUrl: './commandes-container.component.html',
  styleUrls: ['./commandes-container.component.css']
})
export class CommandesContainerComponent implements OnInit {

  commandes : Commande[]

  constructor()
  {
    this.commandes = new Array();
    this.addCommande()
  }

  ngOnInit(): void {
  }

  addCommande(){
    let idCommande = 0
    setInterval(() => {
      this.commandes.push(new Commande(idCommande, null, this.genRandomDemande()))
      idCommande++;
    }, 10000);
  }

  genRandomDemande() : EnumTypeGrains
  {
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
    return type;
  }

  getRandomInt(max) : number
  {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
