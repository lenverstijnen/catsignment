import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  open = false;

  handleOpen() {
    this.open = !this.open;
  }
}

// The implementation could be better, for example by adding a backdrop with click listener to close the mobile menu.
// I've chosen to focus on other things.
