import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FilmeDetalhePage } from '../pages/filme-detalhe/filme-detalhe';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { GenerosPage } from '../pages/generos/generos';
import { GeneroSelecionadoPage } from '../pages/genero-selecionado/genero-selecionado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { FunctionsProvider } from '../providers/functions/functions';
import { IonicStorageModule } from '@ionic/storage';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilmeDetalhePage,
    PesquisaPage,
    FavoritosPage,
    GenerosPage,
    GeneroSelecionadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FilmeDetalhePage,
    PesquisaPage,
    FavoritosPage,
    GenerosPage,
    GeneroSelecionadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    FunctionsProvider,
    LocalStorageProvider
  ]
})
export class AppModule {}
