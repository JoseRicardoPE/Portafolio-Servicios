import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string;
  subtitle: string;
  email: string;

  constructor() {
    this.title = 'Jose Ricardo Pacheco Escobar';
    this.subtitle = 'Desarrollador Web Full Stack';
    this.email = 'ricardo.pachecoescobar@gmail.com';
  }

  ngOnInit(): void {
  }

}
