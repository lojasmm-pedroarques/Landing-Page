import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import vagas from '../../../../output.json'

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  
  constructor(private renderer: Renderer2, private el: ElementRef) {

    //gera uma lista de imagens que serão usadas como placeholders nos cards
    var image_list = new Array('../../../assets/images/images-cards/1.jpg', '../../../assets/images/images-cards/2.jpg', 
    '../../../assets/images/images-cards/3.jpg', '../../../assets/images/images-cards/4.jpg', '../../../assets/images/images-cards/5.jpg',
    '../../../assets/images/images-cards/6.webp', '../../../assets/images/images-cards/7.jpg', '../../../assets/images/images-cards/8.jpg', 
    '../../../assets/images/images-cards/9.jpg', '../../../assets/images/images-cards/10.jpg', '../../../assets/images/images-cards/11.jpg',
    '../../../assets/images/images-cards/12.webp', '../../../assets/images/images-cards/13.jpg', '../../../assets/images/images-cards/14.webp',
    '../../../assets/images/images-cards/15.webp', '../../../assets/images/images-cards/16.jpg', '../../../assets/images/images-cards/17.webp',)
    
    //cria a div que irá conter os cards

    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'cards__vagas');
    
    for(let i = 0; i < vagas.length; i++) {

      //para cada item na lista de vagas é gerado um card
      var randomNum = Math.floor(Math.random() * image_list.length);

      const matCard = this.renderer.createElement('mat-card');
      this.renderer.addClass(matCard, 'mat-card');
      this.renderer.addClass(matCard, 'cards__card');

      const title = this.renderer.createElement('mat-card-title');
      const titleText = this.renderer.createText(vagas[i].titulo);
      this.renderer.appendChild(title, titleText);

      const matCardImage = this.renderer.createElement('img')
      this.renderer.setAttribute(matCardImage, "src", image_list[randomNum]);
      this.renderer.addClass(matCardImage, 'cards__image');

      const matCardContent = this.renderer.createElement('mat-card-content');
      const matCardContentText = this.renderer.createText(vagas[i].descricao);
      const matCardContentTextDiv = this.renderer.createElement('div');
      this.renderer.addClass(matCardContentTextDiv, 'cards__text');
      this.renderer.appendChild(matCardContent, matCardImage);
      this.renderer.appendChild(matCardContentTextDiv, matCardContentText);
      this.renderer.appendChild(matCardContent, matCardContentTextDiv);
      
      const matCardActions = this.renderer.createElement('mat-card-actions');
      const matCardActionsButton = this.renderer.createElement('button');
      const buttonText = this.renderer.createText('Saiba Mais');
      
      this.renderer.addClass(matCardActionsButton, 'mat-button');
      this.renderer.addClass(matCardActionsButton, 'button-saibamais');
      
      this.renderer.appendChild(matCardActionsButton, buttonText);
      this.renderer.appendChild(matCardActions, matCardActionsButton);

      this.renderer.appendChild(matCard, title);
      this.renderer.appendChild(matCard, matCardContent);
      this.renderer.appendChild(matCard, matCardActions);

      this.renderer.appendChild(div, matCard);

    }

    this.renderer.appendChild(this.el.nativeElement, div);

   }
   ngOnInit(): void {
    
  }

}