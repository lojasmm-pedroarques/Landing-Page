import { Component, OnInit } from '@angular/core';
import Vagas from './vagas';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  constructor() {
   }
   
   ngOnInit(): void {
     this.oi()
  }
  

  oi() {
    fetch(`postgres://postgres:1234@localhost:5432/landing_page`)
    .then(res => res.json())
    .then((res: Vagas) => {
      console.log(Vagas)

    })};

  vagas: Vagas[] = [{
    categoria: 'a',
    titulo: 'a',
    descricao: 'a'
  }]
}
  