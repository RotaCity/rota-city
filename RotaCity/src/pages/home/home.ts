import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCircuitosPage } from '../lista-circuitos/lista-circuitos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPageCircuitos() {
    this.navCtrl.push(ListaCircuitosPage);
  }

}
