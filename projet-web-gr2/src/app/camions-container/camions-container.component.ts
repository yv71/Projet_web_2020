import { Component, OnInit } from '@angular/core';
import { Camion } from './camion.model';
import { SelectCamionService} from '../shared/services/select-camion.service';

@Component({
  selector: 'app-camions-container',
  templateUrl: './camions-container.component.html',
  styleUrls: ['./camions-container.component.css']
})

export class CamionsContainerComponent implements OnInit {

  camions : Camion[];

  constructor(private selectCamionService : SelectCamionService) {
      this.camions = new Array();
   }

   ngOnInit(): void {
     this.selectCamionService.getCamions().subscribe((camions : Camion[]) =>
     {
       this.camions = camions;
     });

    /* for(let i =0; i < 2; i++)
     {
        this.camions.push(new Camion(i));
     }*/
   }

   selectCamion(id : number):void
   {
     this.selectCamionService.selectCamion(id-1);
   }


}
