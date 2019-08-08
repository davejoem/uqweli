import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
    {
      title: 'About Uqweli',
      url: '/about-us',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private deploy: Deploy,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.performAutomaticUpdate()
    });
  }

  async changeToMasterChannel() {
    await this.deploy.configure({
      appId: 'e958147d',
      channel: 'Master'
    });
  }

  async performManualUpdate() {
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


  async performAutomaticUpdate() {
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
