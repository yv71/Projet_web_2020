import { Component, Input, OnInit } from '@angular/core';
import { Camion } from '../shared/models/camion.model';
import { Commande } from '../shared/models/commande.model';
import { SelectCamionService } from '../shared/services/select-camion.service';

@Component({
  selector: 'app-menu-camion',
  templateUrl: './menu-camion.component.html',
  styleUrls: ['./menu-camion.component.css']
})
export class MenuCamionComponent implements OnInit {
@Input() commandes : Commande[];

  private camion : Camion;

  constructor(private selectCamionService : SelectCamionService) {}

  ngOnInit(): void {

    this.selectCamionService.getCamion().subscribe((cam : Camion) =>
    {
      this.camion = cam;
    });
  }

  getCamion() : Camion{
    return this.camion;
  }

  getCommandes(): Commande[]{
    let clientsInteresses : Commande[];
    clientsInteresses = [];
    let cam = this.camion;
    console.log('getcommande');
    this.commandes.forEach(function(commande){
      if(cam.getLot().getType() == commande.getTypeGrains()){
        clientsInteresses.push(commande);
        console.log(commande.getClient());
      }
    })
    return clientsInteresses;
  }

  envoieClient(commande : Commande){
    this.camion.setDestination(commande.getClient().getAdresse());
    console.log(commande.getClient().getAdresse());
    this.camion.deplacer();
    let index = this.commandes.indexOf(commande);
    this.commandes.splice(index,1);
  }

}
