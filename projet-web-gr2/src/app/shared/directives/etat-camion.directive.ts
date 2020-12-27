import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appEtatCamion]'
})
export class EtatCamionDirective {
  @HostBinding('style.BackgroundColor') bgColor : string;
  @Input('appEtatCamion') plein : boolean;
  @Input('appLocalisationCamion') localisation : string;


  ngOnChanges()
  {
    switch (this.plein) {
      case false:
          this.bgColor = "white";
        break;
      case true:
          this.bgColor = "green";
        break;
      default:
        break;
    }

    if(this.localisation != "Au silo"){
      this.bgColor = "red";
    }
  }

  constructor() { }

}
