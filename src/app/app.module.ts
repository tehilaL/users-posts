import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CutStringPipe } from './cut-string.pipe';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersListComponent,
    CutStringPipe,
    CommentsListComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
