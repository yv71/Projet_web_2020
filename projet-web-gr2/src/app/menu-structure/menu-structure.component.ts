import { Component, OnInit } from '@angular/core';
import { Structure } from '../shared/models/structure.model';
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

}
