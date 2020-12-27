import { Component, OnInit } from '@angular/core';
import { Camion } from '../camions-container/camion.model';
import { SelectCamionService } from '../shared/services/select-camion.service';


@Component({
  selector: 'app-menu-camion',
  templateUrl: './menu-camion.component.html',
  styleUrls: ['./menu-camion.component.css']
})
export class MenuCamionComponent implements OnInit {

  private camion : Camion;

  constructor(private selectCamionService : SelectCamionService) { }

  ngOnInit(): void {

    this.selectCamionService.getCamion().subscribe((cam : Camion) =>
    {
      this.camion = cam;
    });
  }

  getCamion() : Camion{
    return this.camion;
  }

}
