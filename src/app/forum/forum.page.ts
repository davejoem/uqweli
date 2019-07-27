import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Location } from '@angular/common'
import { AlertController, LoadingController } from '@ionic/angular'

export interface IComment {
  user: string
  time: Date
  message: string
  tags: string[]
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  public tcomments: IComment[]
  public rcomments: IComment[]
  public rselected: boolean

  constructor(
    private alertController: AlertController
    , private http: Http
    , private loader: LoadingController
    , private location: Location
  ) { }

  ngOnInit() {
    this.rselected = true
    this.getMessages()
  }

  goBack() {
    this.location.back()
  }

  segmentChanged(ev: any) {
    this.rselected = !this.rselected
  }

  addComment() {
    let newMessage;
    this.alertController.create({
      header: `New message`
      , inputs: [
        {
          type: 'text',
          max: 240
        }
      ]
      , buttons: [
        {
          text: 'Cancel'
          , handler: () => {
            this.alertController.dismiss()
          },
          role: 'cancel'
        }
        , {
          text: `Post`
          , handler: () => {

          }
        }
      ]
    }).then(alert => {
      alert.present()
    })
  }

  getMessages() {
    this.loader.create({
      message: 'Loading messages'
      , spinner: 'bubbles'
    }).then(loading => {
      loading.present().then(() => {
        this.http.get('https://uqweli-herokuapp.com/messages').subscribe(data => {
          this.rcomments = data.json().messages.rmessages
          this.tcomments = data.json().messages.tmessages
          loading.dismiss()
        }, () => {
          loading.dismiss().then(() => {
            this.showError(`Couldn't load messages. Please check your internet connection and try again.`)
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
            this.getMessages()
          }
        }
      ]
    }).then(alert => {
      alert.present()
    })
  }

}
