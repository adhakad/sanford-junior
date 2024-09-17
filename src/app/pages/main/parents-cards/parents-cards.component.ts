import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { BannerService } from 'src/app/services/banner.service';
import { AdsService } from 'src/app/services/ads.service';
import { TopperService } from 'src/app/services/topper.service';
import { StudentAuthService } from 'src/app/services/auth/student-auth.service';
import { PrintPdfService } from 'src/app/services/print-pdf/print-pdf.service';
import { SchoolService } from 'src/app/services/school.service';


@Component({
  selector: 'app-parents-cards',
  templateUrl: './parents-cards.component.html',
  styleUrls: ['./parents-cards.component.css']
})
export class ParentsCardsComponent implements OnInit {

  private isBrowser: boolean = isPlatformBrowser(this.platformId);


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private sanitizer: DomSanitizer, private schoolService: SchoolService, private printPdfService: PrintPdfService, private bannerService: BannerService, private topperService: TopperService, private adsService: AdsService, private studentAuthService: StudentAuthService) {
    
  }

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
