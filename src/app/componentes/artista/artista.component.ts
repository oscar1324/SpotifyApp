import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  loading: boolean = false;
  arrayArtista: any = {};
  arrayTracks: any = {};
  constructor(private activaRuta: ActivatedRoute, private servicio: SpotifyService) { 

    this.activaRuta.params.subscribe( params =>{

      this.obtenerArtista(params['id']);
      this.getTopTracks(params['id']);
      this.loading = true;
    })
  }

  ngOnInit(): void {
  }
  
  obtenerArtista(id: string){
    this.loading = true;
    this.servicio.getArtistaIndividual(id)
    .subscribe( (artista : any) =>{

      console.log(artista);
      this.arrayArtista = artista;
      this.loading = false;
     

    })
  
  }

  goMusic(){

  }

  getTopTracks(id: string){
    this.servicio.getTopTracks(id)
    .subscribe( (topTrack:any) => {
      console.log("DATOS DE TOPTRACKS:");
      console.log(topTrack);
      this.arrayTracks = topTrack;
      console.log = (this.arrayTracks);
    })

  }
}
