import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hr-client',
  templateUrl: './hr-client.component.html',
  styleUrls: ['./hr-client.component.css'],
})
export class HrClientComponent implements OnInit {
  allProfileData: any = [];
  filterSelected!: String;
  filterSelectedArray: any = ["All"]
  skills = [{name:'All',status: true},{name:'React', status: false},{name:'Angular',status: false},{name:'NodeJS',status: false},{name:'MongoDB',status: false},{name:'.NET',status: false}]
  // skills = ['All','React','Angular','NodeJS','MongoDB','.NET']




  constructor(
    private profileData: ServiceService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getAllProfile();
  }

  findCommonElement(array1: any[], array2: any[]) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                return true;
            }
        }
    }

    return false;
}

  getAllProfile() {
    this.profileData.getAllProfileData().subscribe(
      (res: any) => {
        console.log('All Profile Data : ', res);
        this.allProfileData = res ? res : [];
        // console.log(this.allProfileData)
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
  }

  getFilteredData() {
    // console.log(this.filterSelectedArray)
    if(this.filterSelectedArray.includes("All")){
      return this.allProfileData
    }
    else {
      return this.allProfileData.filter(
        (profile: any) => profile.basicInfo.skillsData.some((x:any)=> {return this.filterSelectedArray.includes(x)})
      );
    }
  }


  selectFilter(skillName: String) {

    if(this.filterSelectedArray.includes(skillName)){
      const index = this.filterSelectedArray.indexOf(skillName)
      if(index>-1){
        this.filterSelectedArray.splice(index, 1);
      }
    }
    else{
      this.filterSelectedArray.push(skillName);
    }

  }

  skillClickEvent(name: string) {
    const newList = this.skills.map(skill => {
      if (skill.name === name) {
        skill.status = !skill.status;
      }
      return skill
    })

    this.skills = newList;
  }
  individualProfileClick(id:String){
    const ProfileId = id
    const profileLink = `http://localhost:4200/web-view/${id}`
    console.log(profileLink)
  }
  getPPImage(x:string){
    const githubProfile = "https://api.github.com/users/"+x
    console.log(githubProfile)
  }
}


