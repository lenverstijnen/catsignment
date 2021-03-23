import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  open = false;

  // The implementation could be better, for example by adding a backdrop with click listener to close the mobile menu.
  // I've chosen to focus on other things, maybe come back later to it.
  handleOpen() {
    this.open = !this.open;
  }

  ngOnInit(): void {}
}
