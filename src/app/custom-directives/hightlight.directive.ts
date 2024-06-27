import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class HightlightDirective implements OnInit{

  constructor( private el:ElementRef) { 
    
  }
@HostListener('click') onClick() {
  this.el.nativeElement.style.color = 'red';
}
@HostBinding('attr.class') role = 'admin';

ngOnInit(): void {
  //console.log("directive init");
}
}
