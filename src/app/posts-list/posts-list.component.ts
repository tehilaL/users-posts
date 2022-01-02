import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private mainService: MainService) { }
  @Input()
  posts: Post[] = [];
  @Output()
  changePost: EventEmitter<{ postId: number }> = new EventEmitter<{ postId: number }>();
  @Input()
  postId: number=1;
  ngOnInit(): void {
    this.postId=this.posts[0].id;
  }
  changePostFunction(postId: number) {
    this.changePost.emit({
      postId: postId
    })
    this.postId = postId;
  }
}
