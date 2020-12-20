import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureComponent } from './structure/structure.component';
import { MenuStructureComponent } from './menu-structure/menu-structure.component';
import { TailleCelluleDirective } from './shared/directives/taille-cellule.directive';
import { EtatStructureDirective } from './shared/directives/etat-structure.directive';
import { CellulesContainerComponent } from './cellules-container/cellules-container.component';
import { TremiesContainerComponent } from './tremies-container/tremies-container.component';

import { SelectStructureService } from './shared/services/select-structure.service';
import { BoisseauxContainerComponent } from './boisseaux-container/boisseaux-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    MenuStructureComponent,
    TailleCelluleDirective,
    EtatStructureDirective,
    CellulesContainerComponent,
    TremiesContainerComponent,
    BoisseauxContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectStructureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
