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
import { CamionsContainerComponent } from './camions-container/camions-container.component';
import { CommandesContainerComponent } from './commandes-container/commandes-container.component';
import { HeaderComponent } from './header/header.component';
import { MenuCamionComponent } from './menu-camion/menu-camion.component';
import { EtatCamionDirective } from './shared/directives/etat-camion.directive';
import {SelectCamionService } from './shared/services/select-camion.service';

@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    MenuStructureComponent,
    TailleCelluleDirective,
    EtatStructureDirective,
    CellulesContainerComponent,
    TremiesContainerComponent,
    BoisseauxContainerComponent,
    CamionsContainerComponent,
    CommandesContainerComponent,
    HeaderComponent,
    MenuCamionComponent,
    EtatCamionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectStructureService, SelectCamionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
