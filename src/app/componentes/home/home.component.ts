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
  nuevasCanciones:any [] = [];
  loading: boolean;
  error: boolean = false;
  constructor(private http: HttpClient, private servicioSpotify: SpotifyService) { 
    this.loading = true;

    this.servicioSpotify.getNuevaLista()
    .subscribe((data:any) => {

      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) =>{
      console.log("Se ha producido un error en servicio:");
      console.log(errorServicio);
      this.error = true;
    } );
  }

  ngOnInit(): void {


  }

}
