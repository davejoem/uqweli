import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { AlertController, PopoverController, } from '@ionic/angular'

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
    , private location: Location
  ) { }

  ngOnInit() {
    this.rselected = true
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

}
