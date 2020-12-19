import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appEtatStructure]'
})
export class EtatStructureDirective {
@HostBinding('style.BackgroundColor') bgColor : string;
@Input('appEtatStructure') etat : string;

  ngOnChanges()
  {
    switch (this.etat) {
      case "vide":
          this.bgColor = "#FFFFF";
        break;
      case "pleine":
          this.bgColor = "green"
        break;
      default:
        break;
    }
  }

  constructor() { }

}
