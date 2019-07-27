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
  public searching: boolean
  public searchResults: any[]
  public rulesArray: any[]

  constructor(
    private http: Http
    , private router: Router
  ) { }

  ngOnInit() {
    this.searching = false
    this.searchResults = []
    this.rulesArray = []
    this.http.get('/assets/acts/traffic.json').subscribe(data => {
      // Read the JSON response and assign it to our rulesArray
      this.rulesArray = data.json().rules
    });
  }

  public startSearch(ev: any) {
    let logo = document.getElementById('logo')
      , searcher = document.getElementById('searcher')
    this.searching = true
    logo.style.height = "34px"
    logo.style.width = "36px"
    logo.style.marginTop = "0%"
    logo.style.marginBottom = "20px"
    logo.style.backgroundImage = "url('/assets/imgs/logo2.png')"
    searcher.style.height = "5%"
    this.searchResults = []
    if (ev.target.value.length) {
      let keyWords = ev.target.value.split(' ')
      this.rulesArray.forEach(rule => {
        for (let i = 0; i < keyWords.length; i++) {
          if (keyWords[i].length) {
            if (rule.offence.includes(keyWords[i])) {
              if (this.searchResults.indexOf(rule) == -1) { this.searchResults.push(rule) }
            }
          }
        }
      })
    } else { this.cancelSearch() }
  }

  private cancelSearch() {
    let logo = document.getElementById('logo')
      , searcher = document.getElementById('searcher')
    this.searching = false
    logo.style.width = "152px"
    logo.style.height = "183px"
    logo.style.marginTop = "10%"
    logo.style.marginBottom = "0%"
    searcher.style.height = "20%"
    logo.style.backgroundImage = "url('/assets/imgs/logo.png')"
  }

  public showDetails(rule: IRule) {
    this.router.navigate(['/details', rule])
  }
}
