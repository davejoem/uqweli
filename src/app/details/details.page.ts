import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage implements OnInit {
  public offence: string;
  public section: string;
  public penalty: string;
  public process: string;
  public inDetail: boolean

  constructor(
    private location: Location
    , private router: Router
    , private activateroute: ActivatedRoute
  ) {
    this.inDetail = true
    this.activateroute.params.subscribe((data: any) => {
      this.offence = data.offence
      this.section = data.section
      this.penalty = data.penalty
      this.process = data.process
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  segmentChanged(ev: any) {
    this.inDetail = !this.inDetail
  }

  goBack() {
    this.location.back()
  }
}
