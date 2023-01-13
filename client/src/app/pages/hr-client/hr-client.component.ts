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
  filterSelected: string = 'All';

  constructor(
    private profileData: ServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProfile();
  }
  // +92-321-1939600

  getAllProfile() {
    this.profileData.getAllProfileData().subscribe(
      (res: any) => {
        console.log('All Profile Data : ', res);
        this.allProfileData = res ? res : [];
        console.log(this.allProfileData)
      },
      (err) => {
        console.log('Error : ', err);
      }
    );
  }

  getFilteredData() {
    if(this.filterSelected == "All"){
      return this.allProfileData
    }
    else {
      return this.allProfileData.filter(
        (x: any) => x.basicInfo.skillsData.indexOf(this.filterSelected) > -1
      );
    }
  }

  selectFilter(skill: string) {
    this.filterSelected = skill;
  }
}
