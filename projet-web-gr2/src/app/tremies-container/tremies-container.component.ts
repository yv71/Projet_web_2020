import { Component, OnInit } from '@angular/core';
import { StructureComponent } from '../structure/structure.component';
import { Structure } from '../shared/models/structure.model';
import { SelectStructureService } from '../shared/services/select-structure.service';

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
  }

  selectTremie(id : number):void
  {
    this.selectStructureService.selectStructure(id-1);
  }

}
