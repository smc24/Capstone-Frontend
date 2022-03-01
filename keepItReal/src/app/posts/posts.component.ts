import { Component, OnInit } from '@angular/core';
import { NewPosts } from '../new-posts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postName: any;
  message: any;
  posts: any;

  constructor(private http: HttpClient) { }

  onSubmit(name: any, mentalConcern: any){
    this.http.post<any>('http://localhost:8080/anonuser/posts/', {name: 'Samo', mentalConcern: 'something expressed'})
    .subscribe((post) => {
      this.postName = post.name;
      this.message = post.mentalConcern;
    })
  }

  

  ngOnInit() {
   this.http.get('http://localhost:8080/anonuser/posts/')
   .subscribe(response=> {
     this.posts=response;
     console.log(response);
   })
  }

}
