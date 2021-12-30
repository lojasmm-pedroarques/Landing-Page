import { Component, OnInit } from '@angular/core';
import { connect } from 'rxjs';

@Component({
  selector: 'app-nossas-pessoas',
  templateUrl: './nossas-pessoas.component.html',
  styleUrls: ['./nossas-pessoas.component.scss']
})
export class NossasPessoasComponent implements OnInit {

  constructor() { }

  scroll() {
    window.scroll(0, 0)
    }

  ngOnInit(): void {
  }

}
