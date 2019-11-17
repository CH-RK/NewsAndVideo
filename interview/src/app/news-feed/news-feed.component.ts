import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  information: Object;
  loading: boolean;

  constructor(private mySer : MyServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.getThisNewsFeed();
  }

  getThisNewsFeed () {
    this.mySer.getNewsFormAPI().subscribe(data=>{
      this.loading = false; // And this one
      this.information = data;
      console.log(this.information);
    })
  }
}
