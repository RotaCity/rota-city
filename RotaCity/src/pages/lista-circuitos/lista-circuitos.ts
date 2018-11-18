import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-circuitos',
  templateUrl: 'lista-circuitos.html',
})
export class ListaCircuitosPage {

  public title_circuito:string = "Engenhos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCircuitosPage');
  }

}
