import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import vagas from '../../../../output.json'

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  
  constructor(private renderer: Renderer2, private el: ElementRef) {

    const div = this.renderer.createElement('div');
    
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