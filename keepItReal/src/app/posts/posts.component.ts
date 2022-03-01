import { Component, OnInit } from '@angular/core';
import { NewPosts } from '../new-posts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postName: any;
  message: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<any>('http://localhost:8080/anonuser/posts/', {name: 'Samo', mentalConcern: 'something expressed'})
    .subscribe((post) => {
      this.postName = post.name;
      this.message = post.mentalConcern;
    })
  }

}
