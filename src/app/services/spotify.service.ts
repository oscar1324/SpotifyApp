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
            'Authorization': 'Bearer BQAor-8gga0BBYvDIaquIrSsz1tCemHfOVVuMxNS2g7SVDa6vqvJRp_j2GZhSh6AAallbwoHLhQAV6HuQnM'
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
        //.pipe( map ((data:any) => data.artists.items))

     }
}