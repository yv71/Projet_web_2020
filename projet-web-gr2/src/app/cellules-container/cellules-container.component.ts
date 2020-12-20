import { Component, OnInit } from '@angular/core';
import { StructureComponent } from '../structure/structure.component';
import { Structure } from '../shared/models/structure.model';
import { SelectStructureService } from '../shared/services/select-structure.service';

@Component({
  selector: 'app-cellules-container',
  templateUrl: './cellules-container.component.html',
  styleUrls: ['./cellules-container.component.css']
})
export class CellulesContainerComponent implements OnInit {

  cellules : StructureComponent[];
  cellulesModel : Structure[];

  constructor(private selectStructureService : SelectStructureService) {
      this.cellules = new Array();
   }

  ngOnInit(): void {
    this.selectStructureService.getCellules().subscribe((cellules : Structure[]) =>
    {
      this.cellulesModel = cellules;
    });
    for(let i =0; i < 8; i++)
    {
      let cellule = this.cellulesModel[i];
      if(i == 0 || i == 7)
      {
        this.cellules.push(new StructureComponent(cellule,true));
      }
      else
      {
        this.cellules.push(new StructureComponent(cellule,false));
      }
    }
  }

  selectCellule(id : number):void
  {
    this.selectStructureService.selectStructure(id-1);
  }

}
