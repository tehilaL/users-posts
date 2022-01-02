import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  constructor(private mainService: MainService) { }
  @Input()
  comments: Comment[] = [];
  ngOnInit(): void {
      }
}
