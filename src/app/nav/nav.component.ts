import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  scrollTop() {
    window.scroll(0, 0)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
