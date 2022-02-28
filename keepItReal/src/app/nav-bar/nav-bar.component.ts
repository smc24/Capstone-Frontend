import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../service/slideshow.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  active = 'HOME';

  constructor(private slideShowService: SlideshowService) { }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  ngOnInit(): void {
  }

}
