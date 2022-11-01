import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  constructor() { }

  OpenMenuOnClick() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
  }

}
