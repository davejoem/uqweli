import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-cop-of-the-day',
  templateUrl: './cop-of-the-day.page.html',
  styleUrls: ['./cop-of-the-day.page.scss'],
})
export class CopOfTheDayPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { }

  goBack() {
    this.location.back()
  }

}
