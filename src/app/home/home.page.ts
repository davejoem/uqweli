import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('logo') logo: ElementRef
  @ViewChild('search') searchBar: ElementRef
  @ViewChild('pages') pages: ElementRef

  constructor(private router: Router) {

  }

  ngOnInit() { }

  goTo(location: string) {
    switch (location) {
      case 'forum': this.router.navigateByUrl('/forum')
      case 'iMetACop': this.router.navigateByUrl('/iMetACop')
      case 'copOfTheDay': this.router.navigateByUrl('/copOfTheDay')
      case 'discuss': this.router.navigateByUrl('/discuss')
    }
  }

  search() {
document.getElementById('logo').style.height = "5%"
    document.getElementById('pages').style.display = "none"
  }
}
