import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises: any[] =[];
  constructor(private http: HttpClient, private servicioSpotify: SpotifyService) { 

  }

  ngOnInit(): void {

    this.servicioSpotify.getNuevaLista();
  }

}
