import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Http } from '@angular/http'
import { AlertController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {

  public discussions: any

  constructor(
    private location: Location
    , private alertController: AlertController
    , private http: Http
    , private loader: LoadingController
  ) { }

  ngOnInit() {
    this.getDiscussions()
  }

  goBack() {
    this.location.back()
  }

  getDiscussions() {
    this.loader.create({
      message: `Getting active discusssions`
      , spinner: 'bubbles'
    }).then(loading => {
      loading.present().then(() => {
        this.http.get('https://uqweli-herokuapp.com/discussions').subscribe(data => {
          this.discussions = data.json().discussions
          loading.dismiss()
        }, () => {
          loading.dismiss().then(() => {
            this.showError(`Couldn't load discusssions.`)
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
            this.getDiscussions()
          }
        }
      ]
    }).then(alert => {
      alert.present()
    })
  }
}
