import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private deploy: Deploy,
    private location: Location
  ) { }

  ngOnInit() { }

  public goBack() {
    this.location.back()
  }

  public async performManualUpdate() {
    const update = await this.deploy.checkForUpdate()
    if (update.available) {
      console.log('Update found');
      alert('Update found')
      await this.deploy.downloadUpdate((progress) => {
        console.log('Downloading update...' + progress + '%');
        alert('Downloading update')
      })
      await this.deploy.extractUpdate((progress) => {
        console.log('Extracting update...' + progress + '%');
        alert('Extracting update')
      })
      await this.deploy.reloadApp();
      // this.splashScreen.hide();
    } else {
      console.log();
      alert('No update found')
    }
  }

  public async performAutomaticUpdate() {
    try {
      const currentVersion = await this.deploy.getCurrentVersion();
      const resp = await this.deploy.sync({ updateMethod: 'auto' }, percentDone => {
        console.log(`Update is ${percentDone}% done!`);
      });
      if (currentVersion.versionId !== resp.versionId) {
        // We found an update, and are in process of redirecting you since you put auto!
      } else {
        // No update available
        console.log();
        alert('No update found')
      }
    } catch (err) {
      // We encountered an error.
      this.performManualUpdate()
    }
  }
}
