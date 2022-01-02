import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Post } from '../post';
import { Comment } from '../comment';
import { interval, Subject, Subscription } from 'rxjs';
import * as flexLayout from '@angular/flex-layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private mainService: MainService) {
   }
  posts: Post[] = [];
  comments: Comment[] = [];
  postId: number = 1;
  ngOnInit(): void {
    this.mainService.getPostsByUser(1).subscribe(data => {
      this.posts = data;
      this.mainService.getCommentsByPost(this.posts[0].id).subscribe(data => {
        this.comments = data;
      })
    })
    this.getCommentsByPostId(this.postId);
    interval(30000).subscribe(x => {
      this.getCommentsByPostId(this.postId);
    });
  }
  changeUser(data: { userId: number }) {
    this.mainService.getPostsByUser(data.userId).subscribe(data => {
      this.posts = data;
      this.changePost({ postId: this.posts[0].id });
    })
  }
  changePost(data: { postId: number }) {
    this.postId = data.postId;
    this.getCommentsByPostId(data.postId)
  }
  getCommentsByPostId(postId: number) {
    this.mainService.getCommentsByPost(postId).subscribe(data => {
      this.comments = data;
    })
  }

}
