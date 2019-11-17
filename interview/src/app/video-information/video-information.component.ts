import { Component, OnInit } from '@angular/core';
import { DomSanitizer ,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-information',
  templateUrl: './video-information.component.html',
  styleUrls: ['./video-information.component.css']
})
export class VideoInformationComponent implements OnInit {
  safeVideoUrl: SafeResourceUrl;

  constructor(private domSanitizer : DomSanitizer) { 
    
    this.safeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rUO27O9-E50?autoplay=1')

  }

  ngOnInit() {
  }

}
