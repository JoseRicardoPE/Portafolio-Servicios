import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portafolio-servicios';

  constructor() {}

  ngOnInit() {
    $('.header__menu').click(function(){
      $('.header__nav').addClass('header__nav--show');
    });

    $('.header__nav').click(function(){
      $('.header__nav').removeClass('header__nav--show');
    });
  }
}
