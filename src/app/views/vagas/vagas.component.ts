import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import vagas from '../../../../output.json'

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  
  constructor(private renderer: Renderer2, private el: ElementRef) {
    var set = new Set()
    for(let i = 0; i < vagas.length; i++) {
      set.add(vagas[i].categoria)
     }

    //declara a lista e atribuí os valores que estão no set
    var lista: any
    lista = Array.from(set)
    
    //cria a div que irá conter os cards

    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'cards__vagas')

    for(let i = 0; i < lista.length; i++) { 
      const matToolbar = this.renderer.createElement('mat-toolbar');
      const categoria = this.renderer.createText(lista[i]);
      this.renderer.appendChild(matToolbar, categoria);
      this.renderer.addClass(matToolbar, 'mat-toolbar')
      this.renderer.addClass(matToolbar, 'header')
      this.renderer.addClass(matToolbar, 'mat-toolbar-single-row')
      this.renderer.appendChild(this.el.nativeElement, matToolbar);
    }
    
    for(let i = 0; i < vagas.length; i++) {
      const matCard = this.renderer.createElement('mat-card');
      this.renderer.addClass(matCard, 'mat-card')
      this.renderer.addClass(matCard, 'cards__card')


      const title = this.renderer.createElement('mat-card-title');
      const titleText = this.renderer.createText(vagas[i].titulo);
      this.renderer.appendChild(title, titleText);
      this.renderer.addClass(matCard, 'mat-card-title')

      const matCardContent = this.renderer.createElement('mat-card-content');
      const matCardContentText = this.renderer.createText(vagas[i].descricao)
      this.renderer.appendChild(matCardContent, matCardContentText)
      
      this.renderer.appendChild(matCard, title);
      this.renderer.appendChild(matCard, matCardContent);

      this.renderer.appendChild(div, matCard);

    }

    this.renderer.appendChild(this.el.nativeElement, div);

   }
   ngOnInit(): void {
    
  }

}