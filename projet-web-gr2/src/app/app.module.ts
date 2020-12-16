import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiloComponent } from './silo/silo.component';
import { StructureComponent } from './structure/structure.component';
import { MenuStructureComponent } from './menu-structure/menu-structure.component';
import { TailleCelluleDirective } from './shared/directives/taille-cellule.directive';

@NgModule({
  declarations: [
    AppComponent,
    SiloComponent,
    StructureComponent,
    MenuStructureComponent,
    TailleCelluleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
