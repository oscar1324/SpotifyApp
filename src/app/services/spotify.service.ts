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
            'Authorization': 'Bearer BQBbvIg-NFoZOY82Pfuv36VNE4rMfJt4slmQAwrFtZmTLXVL3EktrIrQEDoRrznaUaz2eaUW5qiEyexRqn4'
        })
        this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: cabecera})
        .subscribe( (data:any)=>{
            console.log(data);
        })
    }
}