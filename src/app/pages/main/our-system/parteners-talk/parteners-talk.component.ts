import {  Component, Inject, OnInit, PLATFORM_ID  } from '@angular/core';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-parteners-talk',
  templateUrl: './parteners-talk.component.html',
  styleUrls: ['./parteners-talk.component.css']
})
export class PartenersTalkComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platformId);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.isBrowser) {

      setTimeout(() => {
        jQuery('.parents-carousel').owlCarousel({
          stagePadding:10,
          items: 1,
          loop: true,
          dots: false,
          nav: true,
          responsiveClass: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          margin:20,
          // navText: [
          //   "<button style='position:absolute;left:-10px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_left</mat-icon></button>",
          //   "<button style='position:absolute;right:-10px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_right</mat-icon></button>"
          // ],
          responsive: {
            600: {
              stagePadding:10,
              items: 1,
            },
            1500: {
              stagePadding:30,
              items: 2,
              margin:50,
            },
          }
        });
      }); 

    }
  }

}
