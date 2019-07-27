import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Http } from '@angular/http'
import { AlertController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-cop-of-the-day',
  templateUrl: './cop-of-the-day.page.html',
  styleUrls: ['./cop-of-the-day.page.scss'],
})
export class CopOfTheDayPage implements OnInit {

  public copoftheday: any

  constructor(
    private location: Location
    , private alertController: AlertController
    , private http: Http
    , private loader: LoadingController
  ) { }

  ngOnInit() {
    this.getCop()
  }

  goBack() {
    this.location.back()
  }

  getCop() {
    this.loader.create({
      message: 'Finding our good cop'
      , spinner: 'bubbles'
    }).then(loading => {
      loading.present().then(() => {
        this.http.get('https://uqweli-herokuapp.com/copoftheday').subscribe(data => {
          this.copoftheday = data.json().copoftheday
          loading.dismiss()
        }, () => {
          loading.dismiss().then(() => {
            this.showError(`Oh no! Couldn't find a good cop. :-)`)
          })
        })
      })
    })
  }

  showError(message: string) {
    this.alertController.create({
      header: `Error`
      , message: message
      , buttons: [
        {
          text: `Okay`
          , role: `cancel`
          , handler: () => {
            this.alertController.dismiss()
            this.goBack()
          }
        }, {
          text: `Retry`
          , handler: () => {
            this.getCop()
          }
        }
      ]
    }).then(alert => {
      alert.present()
    })
  }
}
