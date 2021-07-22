import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
// Importando en el inyectable ese proveedor root, no haría falta importarlo en el module.ts
@Injectable({
    providedIn: 'root'
})

export class SpotifyService{
    constructor(private http: HttpClient){
        console.log("Service spotifiy listo");
    }

    getNuevaLista(){

        const cabecera = new HttpHeaders({
            'Authorization': 'Bearer BQC7-D8GqOnPSC6ZfUeifKG7fkwtGMVlusT6QGPWk6XQrPXrMub6XmD3ZY8yVX92ks4WF7O4DPjw-KF3cd4'
        })
       return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: cabecera})

    }

    getArtista(termino: string){
        const cabecera = new HttpHeaders({
            'Authorization': 'Bearer BQC7-D8GqOnPSC6ZfUeifKG7fkwtGMVlusT6QGPWk6XQrPXrMub6XmD3ZY8yVX92ks4WF7O4DPjw-KF3cd4'
        })
       return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`, {headers: cabecera})

    }
}