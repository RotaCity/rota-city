import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-news',
  templateUrl: 'lista-news.html',
})
export class ListaNewsPage {

  public title_news:string = "Ipojuca mais uma vez nas semi-finais";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaNewsPage');
  }

}
