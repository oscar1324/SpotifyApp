import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
//Peticiones
import {HttpClientModule} from '@angular/common/http';
// Servicios
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
