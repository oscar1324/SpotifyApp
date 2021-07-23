import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  arrayArtista: any = {};
  constructor(private activaRuta: ActivatedRoute, private servicio: SpotifyService) { 

    this.activaRuta.params.subscribe( params =>{

      this.obtenerArtista(params['id']);

    })
  }

  ngOnInit(): void {
  }
  
  obtenerArtista(id: string){
    this.servicio.getArtistaIndividual(id)
    .subscribe( (artista : any) =>{

      console.log(artista);
      this.arrayArtista = artista;

    })
  
  }

  goMusic(){

  }
}
