import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTailleCellule]'
})
export class TailleCelluleDirective {
@HostBinding('style.box-sizing') boxSizing : string;
@HostBinding('style.flex') flex : string;
@Input('appTailleCellule') isBig : boolean;

  ngOnChanges()
  {
    if(!this.isBig)
    {
      this.boxSizing = 'border-box';
      this.flex =  '0 50%';
    }

  }

  constructor() { }

}
