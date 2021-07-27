import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';


// Importando en el inyectable ese proveedor root, no haría falta importarlo en el module.ts
@Injectable({
    providedIn: 'root'
})

export class SpotifyService{
    constructor(private http: HttpClient){
        console.log("Service spotifiy listo");
    }

    getQuery(query: string){
        const url = `https://api.spotify.com/v1/${ query }`;

        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDtREEjEcfIVoRZGp4EIm39AonAvvALX9f7P38sb3mjm8N-nBgKLToGLB9YRrGSNyHkjnfv6SWDVXhYN7U'
        })

        return this.http.get(url, {headers});
    }

    getNuevaLista(){
       return this.getQuery('browse/new-releases?limit=20')
       .pipe( map( (data : any) => data.albums.items))
       
    }

    getArtista(termino: string){

        return this.getQuery(`search?q=${termino}&type=artist&limit=15`) 
        .pipe( map ((data:any) => data.artists.items))
 
    }

    getArtistaIndividual(id: string){

        return this.getQuery(`artists/${id}`) 
    }

    getTopTracks(id: string){

        return this.getQuery(`artists/${id}/top-tracks?country=us`) 
        .pipe( map( (data: any) => data['tracks']));
        

    }
}