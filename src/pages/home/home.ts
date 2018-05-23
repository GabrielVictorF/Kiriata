import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Filme } from '../../models/filme';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public generos = {genres: ''};
	public filmesPopular: Filme[] = Array();

  constructor(public navCtrl: NavController, public api: ApiProvider) {
  	this.api.getFilmesPopular().subscribe(res => { 
      this.filmesPopular = res.results;  
  	});
  }

  verDetalhe(x) {
  	this.navCtrl.push(FilmeDetalhePage, {filmeSelecionado: x})
  }
}
