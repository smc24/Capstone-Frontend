import { Component, OnInit } from '@angular/core';
import { SlideshowService } from './service/slideshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'keepItReal';
  showComponent: boolean = this.slideShowService.getShowComponent();

  constructor(private slideShowService: SlideshowService){
  }

  ngOnInit() {
      
  }

}
