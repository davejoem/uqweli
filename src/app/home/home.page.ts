import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'


export interface IRule {
  offence: string
  section: string
  penalty: string
  process: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public searching: boolean = false
  public searchResults: any[] = []
  public rulesArray: any[] = []

  constructor(
    private http: Http
    , private router: Router
  ) {
    this.http.get('/assets/acts/traffic.json').subscribe(data => {
      // Read the JSON response      
      this.rulesArray = data.json().rules
    });
  }

  ngOnInit() { }

  startSearch(ev: any) {
    let logo = document.getElementById('logo')
      , image = document.getElementById('image')
      , searcher = document.getElementById('searcher')
    logo.style.height = "10%"
    logo.style.marginTop = "0%"
    logo.style.marginBottom = "10%"
    logo.style.width = "25%"
    image.outerHTML = '<img id="image" src="/assets/imgs/logo2.png" alt = "Logo" >'
    searcher.style.height = "5%"
    this.searching = true
    this.searchResults = []
    this.rulesArray.forEach(rule => {
      if (rule.offence.includes(ev.target.value)) {
        this.searchResults.push(rule)
      }
    })
  }

  cancelSearch(ev: any) {
    let logo = document.getElementById('logo')
      , searcher = document.getElementById('searcher')
    // ev.target.value = ''
    logo.style.height = "34px"
    logo.style.width = "36px"
    logo.style.marginTop = "10%"
    logo.style.marginBottom = "0%"
    searcher.style.height = "20%"
    logo.style.backgroundImage = "url('/assets/imgs/logo2.png')"
    this.searching = false
  }

  showDetails(rule: IRule) {
    this.router.navigate(['/details', rule])
  }
}
