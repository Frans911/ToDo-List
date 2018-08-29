
import { ACTIVITIES } from './../../mocks/activity.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  splash = true; 
  ActivitiesList = ACTIVITIES;
  constructor(public navCtrl: NavController, public navParams: NavParams,private splashScreen:SplashScreen) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage'); 
    setTimeout(() => this.splash = false, 4000);
  } 
  beginToDo(){
    this.navCtrl.push('SecondPage');
  }
}
