import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-my-views',
  templateUrl: './my-views.page.html',
  styleUrls: ['./my-views.page.scss'],
})
export class MyViewsPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
