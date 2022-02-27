import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images = ["stigma-slideshow.jpg"].map((name) => `./assets/images/${name}.jpg`);


  constructor() { }

  ngOnInit(): void {
  }

}
