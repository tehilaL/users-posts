import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
 
  constructor(private http: HttpClient) {
 
}
  getUsersList(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  getPostsByUser(userId:number): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/'+userId.toString()+'/posts');
  }
  getCommentsByPost(postId:number): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/'+postId.toString()+'/comments');
  }
}
