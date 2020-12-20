
import { Component, OnInit } from '@angular/core';
import { StructureComponent } from '../structure/structure.component';
import { Structure } from '../shared/models/structure.model';
import { SelectStructureService } from '../shared/services/select-structure.service';

@Component({
  selector: 'app-boisseaux-container',
  templateUrl: './boisseaux-container.component.html',
  styleUrls: ['./boisseaux-container.component.css']
})
export class BoisseauxContainerComponent implements OnInit {

  boisseaux : StructureComponent[];
  boisseauxModel : Structure[];

  constructor(private selectStructureService : SelectStructureService) {
      this.boisseaux = new Array();
   }

   ngOnInit(): void {
     this.selectStructureService.getBoisseaux().subscribe((boisseaux : Structure[]) =>
     {
       this.boisseauxModel = boisseaux;
     });
     for(let i =0; i < 2; i++)
     {
       let boisseau = this.boisseauxModel[i];
       if(i == 0 || i == 7)
       {
         this.boisseaux.push(new StructureComponent(boisseau,true));
       }
       else
       {
         this.boisseaux.push(new StructureComponent(boisseau,false));
       }
     }
   }

   selectBoisseau(id : number):void
   {
     this.selectStructureService.selectStructure(id-1);
   }
}
