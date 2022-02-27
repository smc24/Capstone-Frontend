import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../service/slideshow.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  active = 'top';

  constructor(private slideShowService: SlideshowService) { }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  ngOnInit(): void {
  }

}
