import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-main',
  templateUrl: './guest-main.component.html',
  styleUrls: ['./guest-main.component.scss'],
})
export class GuestMainComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    // Get the button:
    const mybutton = document.getElementById('back-to-top');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton!.style.display = 'block';
      } else {
        mybutton!.style.display = 'none';
      }
    };
  }

  ngOnInit(): void {
    document.body.className =
      'control-sidebar-slide-open sidebar-collapse layout-navbar-fixed';
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
