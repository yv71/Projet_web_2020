import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTailleCellule]'
})
export class TailleCelluleDirective {
@HostBinding('style.width') width : string;
@Input('appTailleCellule') isBig : boolean;

  ngOnChanges()
  {
    if(this.isBig)
    {
      this.width = '100%';
    }
    else
    {
      this.width = '50%';
    }
  }

  constructor() { }

}
