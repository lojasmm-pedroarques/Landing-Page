import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor() { }

  scroll() {
    window.scroll(0, 0)
    }
  
  ngOnInit(): void {
  }

}
