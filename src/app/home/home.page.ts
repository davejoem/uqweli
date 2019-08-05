import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'

export interface IRule {
  offence: string
  section: string
  penalty: string
  process: string
  category: string
}

@Component({
  selector: `app-home`,
  templateUrl: `home.page.html`,
  styleUrls: [`home.page.scss`],
})
export class HomePage implements OnInit {
  public searching: boolean
  public allResults: IRule[]
  public searchResults: IRule[]
  public penalResults: IRule[]
  public trafficResults: IRule[]
  public rulesArray: any[]
  public category: string
  public search: CustomEvent

  constructor(
    private http: Http
    , private router: Router
  ) { }

  ngOnInit() {
    this.category = `all`
    this.searching = false
    this.allResults = []
    this.trafficResults = []
    this.penalResults = []
    this.rulesArray = []
    this.http.get(`/assets/acts/all.json`).subscribe(data => {
      // Read the JSON response and assign it to our rulesArray
      this.rulesArray = data.json().rules
    });
  }

  private categorize(rule: IRule) {
    if ((rule.category == `traffic`) && (this.trafficResults.indexOf(rule) == -1)) this.trafficResults.push(rule)
    if ((rule.category == `penal`) && (this.penalResults.indexOf(rule) == -1)) this.penalResults.push(rule)
  }

  public hideLower() {
    let lower = document.getElementById(`lower`)
    lower.style.visibility = `hidden`
  }

  public showLower() {
    let lower = document.getElementById(`lower`)
    if (!this.searching) lower.style.visibility = `visible`
  }

  public startSearch(ev: CustomEvent, category?: any) {
    this.search = ev
    let logo = document.getElementById(`logo`)
      , searcher = document.getElementById(`searcher`)
    this.searching = true
    logo.style.height = `34px`
    logo.style.width = `36px`
    logo.style.marginTop = `0%`
    logo.style.marginBottom = `20px`
    logo.style.backgroundImage = `url('/assets/imgs/logo2.png')`
    searcher.style.height = `5%`
    this.allResults = []
    this.trafficResults = []
    this.penalResults = []
    if (ev.detail.value.length) {
      let keyWords = ev.detail.value.split(` `)
      this.rulesArray.forEach(rule => {
        for (let i = 0; i < keyWords.length; i++) {
          if (keyWords[i].length) {
            if (rule.offence.includes(keyWords[i])) {
              this.categorize(rule)
              if (this.allResults.indexOf(rule) == -1) {
                this.allResults.push(rule)
              }
            }
          }
        }
      })

      if (category == `all` || this.category == `all`) this.searchResults = this.allResults
      if (category == `traffic` || this.category == `traffic`) this.searchResults = this.trafficResults
      if (category == `penal` || this.category == `penal`) this.searchResults = this.penalResults

      console.log(this.searchResults.length)
    } else { this.cancelSearch() }
  }

  public segmentChanged(ev: CustomEvent) {
    this.category = ev.detail.value
    this.startSearch(this.search, this.category)
    window['http'] = this.http
    this.http.get(`/assets/acts/penal.json`).subscribe(data => {
      console.log(data)
    })
  }


  public cancelSearch() {
    let logo = document.getElementById(`logo`)
      , searcher = document.getElementById(`searcher`)
    this.searching = false
    logo.style.width = `152px`
    logo.style.height = `183px`
    logo.style.marginTop = `10%`
    logo.style.marginBottom = `0%`
    searcher.style.height = `20%`
    logo.style.backgroundImage = `url('/assets/imgs/logo.png')`
    logo.focus()

  }



  public showDetails(rule: IRule) {
    this.router.navigate([`/details`, rule])
  }
}
