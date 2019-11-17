import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ContentMasterComponent } from './content-master/content-master.component';
import { VideoInformationComponent } from './video-information/video-information.component';


const routes: Routes = [
   { path : 'newsFeed', component:NewsFeedComponent },
   { path : 'contentInfo' , component:ContentMasterComponent},
   { path : 'videoInfo' , component:VideoInformationComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
