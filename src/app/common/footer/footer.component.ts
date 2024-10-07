import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public schoolName = environment.SCHOOL_NAME;
  currentYear: any;
  schoolInfo:any;
  facebook:string='https://www.facebook.com/people/Sanford-Junior/61564942320502/?name=xhp_nt__fb__action__open_user';
  linkedin:string='https://in.linkedin.com/company/sanford-junior';
  instagram:string='https://www.instagram.com/sanfordjunior_suryanagar/';
  youtube:string='https://www.youtube.com/@SanfordJunior';
  softwareCompanyLink:string='https://schooliya.in';
  constructor(private schoolService:SchoolService) { }

  ngOnInit(): void {
    this.getSchool();
    this.currentYear = (new Date()).getFullYear();
  }
  socialMediaRedirect(link:string){
    const sanitizedLink = encodeURI(link);
    window.location.href = sanitizedLink;
  }
  softwareCompany(link:string){
    const sanitizedLink = encodeURI(link);
    window.location.href = sanitizedLink;
  }
  getSchool(){
    this.schoolService.getSchool().subscribe((res:any)=> {
      if(res){
        this.schoolInfo = res;
        this.facebook = 'https://www.facebook.com/people/Sanford-Junior/61564942320502/?name=xhp_nt__fb__action__open_user';
        this.linkedin = 'https://in.linkedin.com/company/sanford-junior';
        this.instagram = 'https://www.instagram.com/sanfordjunior_suryanagar/';
        this.youtube = 'https://www.youtube.com/@SanfordJunior';
        
      }
    })
  }

}
