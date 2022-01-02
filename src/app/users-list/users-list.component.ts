import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  @Output()
  changeUser: EventEmitter<{ userId: number }> = new EventEmitter<{ userId: number }>();
  userId: number = 1;
  @Input()
  public getScreenWidth: any;
  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getUsersList();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  getUsersList() {
    this.mainService.getUsersList().subscribe(data => {
      this.users = data;
    })
  }
  changeUserFunction(userId: number) {
    this.userId = userId;
    this.changeUser.emit({
      userId: userId
    })
  }
  changeUserMobile(event: any) {
    this.changeUser.emit({
      userId: this.userId
    })
  }
}

