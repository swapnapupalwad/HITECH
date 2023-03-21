import { Component,OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



  constructor(private elementRef: ElementRef) { }
  myFunction() {
    const x = this.elementRef.nativeElement.querySelector('#myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }


  ngOnInit() {
  }



}
