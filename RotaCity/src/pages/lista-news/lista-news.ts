import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-lista-news',
  templateUrl: 'lista-news.html',
})
export class ListaNewsPage {

  public title_news:string = "Ipojuca mais uma vez nas semi-finais";

  users: any[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public servicos: ServicosProvider
    ) {

      this.buscarDados();
  }

  buscarDados() {
    //retornar dados do banco
    this.servicos.listarDados()
    .subscribe(
      data=> this.users = data,
      err=> console.log(err)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaNewsPage');
  }

}
