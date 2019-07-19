import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  segmentChanged(ev: any) {
    
  }

}
