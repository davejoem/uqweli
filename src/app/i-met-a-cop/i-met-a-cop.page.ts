import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-i-met-a-cop',
  templateUrl: './i-met-a-cop.page.html',
  styleUrls: ['./i-met-a-cop.page.scss'],
})
export class IMetACopPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { }

  goBack() {
    this.location.back()
  }

}
