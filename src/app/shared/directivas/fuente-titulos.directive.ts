import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFuenteTitulos]'
})
export class FuenteTitulosDirective {
  _fontSize: number  =10;
  constructor(private elementRef: ElementRef, private render: Renderer2) { 
    this.render.setStyle(this.elementRef.nativeElement, 'font-size', "20px");
  }

    // Acceder al valor de la variable
    get fontSize() {
      return this.fontSize;
    }
  
    // Cambiar el valor de la variable
    // Detectar los cambios especificamente en este input (fontSize)
    set fontSize(newValue: number) {
      this._fontSize = newValue;
      this.render.setStyle(
        this.elementRef.nativeElement,
        'font-size',
        this.fontSize
      );}
}


