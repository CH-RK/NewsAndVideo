import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ContentMasterComponent } from './content-master/content-master.component';
import { VideoInformationComponent } from './video-information/video-information.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    ContentMasterComponent,
    VideoInformationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
