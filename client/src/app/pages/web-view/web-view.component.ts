import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css']
})

  

  
export class WebViewComponent {

  profileInfo!: any;
  imgSrc: any;
  leetCode: string | undefined;
  leetcodeData: any;
  leetcodeInfo: any;
  
  // profileID: String="";
  // @Output() 
  // navClicked = new EventEmitter();
  // navElements = 'getAbout'
  // navclick(clickedElements: string){
  //   this.navElements = clickedElements
  //   console.log(this.navElements)
  // }
  // setNavElements(clickedItem: string) {
  //   this.navElements = clickedItem;
  // }
  constructor(
    private profileData: ServiceService,
    private router: ActivatedRoute
  ) {}
  profileID:String = this.router.snapshot.params['id'];
  getProfile(): void {
    this.profileData.getProfileData(this.profileID).subscribe(res=> {
      this.profileInfo = res;
      this.imgSrc = "https://ghchart.rshah.org/"+this.profileInfo.userAccInfo.githubLink
      // this.leetCode = "https://leetcode-stats-api.herokuapp.com/"+this.profileInfo.leetcodeLink
      console.log(this.profileInfo)
      // console.log(this.imgSrc);

      // this.profileData.getLeetCodeData(this.profileInfo.leetcodeLink)
      
      this.getLeetData()
        // this.profileForm.patchValue(res);
        // this.profileForm.get('basicInfo.email')?.setValue(res.email);
      });
  }

  getLeetData():void{
    
    this.profileData.getLeetCodeData(this.profileInfo.userAccInfo.leetcodeLink).subscribe((res: any)=> {
      this.leetcodeInfo = res;
      // console.log(this.leetcodeInfo)
      
      // console.log(this.imgSrc);

      // this.profileData.getLeetCodeData(this.profileInfo.leetcodeLink)
      
      
        // this.profileForm.patchValue(res);
        // this.profileForm.get('basicInfo.email')?.setValue(res.email);
      });
  }

  
  

  ngOnInit():void{
    // console.log(this.imgSrc)
    this.getProfile()
    
    // console.log(this.profileID)
    // this.getProfile();
  }


    // about: any;
    // resume: any;
    // contact: any;
    // getAbout: any;
    // getResume: any;
    // getContact: any;

  //   removeClass() {
  //     // Links
  //     this.getAbout.classList.remove('selected');
  //     this.getResume.classList.remove('selected');
  //     this.getContact.classList.remove('selected');
  //     // Sections
  //     this.about.classList.remove('view');
  //     this.resume.classList.remove('view');
  //     this.contact.classList.remove('view');
  // }

  // getAboutSec() {
  //     if (window.innerWidth > 1040) {
  //         this.removeClass();
  //         this.about.classList.add('view');
  //         this.getAbout.classList.add('selected');
  //     }

  // }
  // getResumeSec() {
  //     if (window.innerWidth > 1040) {
  //       // event.preventDefault();
  //         this.removeClass();
  //         this.resume.classList.add('view');
  //         this.getResume.classList.add('selected');
  //     }
  // }
  // getContactSec() {
  //     if (window.innerWidth > 1040) {
  //       // event.preventDefault();
  //         this.removeClass();
  //         this.contact.classList.add('view');
  //         this.getContact.classList.add('selected');
  //     }
  // }
}



