import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-curriculam',
  templateUrl: './curriculam.component.html',
  styleUrls: ['./curriculam.component.css']
})
export class CurriculamComponent implements OnInit {
  loader: Boolean = true;
  youtubeVideoUrls: string[] = [
    "https://www.youtube.com/watch?v=HWV3ioV8NQk",
  ];
  thumbnailUrls: SafeUrl[] = [];
  youtubeVideoSafeUrls: SafeResourceUrl[] = [];
  constructor(private sanitizer: DomSanitizer,) { 
    this.youtubeVideoUrls.forEach(url => {
      const videoId = this.getVideoIdFromUrl(url);
      const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
      const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

      // Sanitize URLs
      this.youtubeVideoSafeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl));
      this.thumbnailUrls.push(this.sanitizer.bypassSecurityTrustUrl(thumbnailUrl));
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }

  getVideoIdFromUrl(url: string): string | null {
    const videoIdMatch = url.match(/(?:\?|&)v=([^\?&]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null;
  }
  redirectUser(videoUrl: string) {
    window.location.href = videoUrl;
  }

}
