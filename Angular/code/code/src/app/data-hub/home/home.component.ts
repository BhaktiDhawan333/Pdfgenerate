import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  num1: number = 0;
  timeout: any;


  constructor() { }

  ngOnInit(): void {

    this.demo();


  }


  demo() {

    console.log("hello bhakti");
    setInterval(() => {

      this.demo();

    }, 4000);
  }




}
