import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};
  topTracks:any[] = [];
  loadingArtista:boolean;

  constructor(private activatedRoute:ActivatedRoute, private sptifyservice :SpotifyService) { 

    this.loadingArtista = true;

    this.activatedRoute.params.subscribe(param => {
        // console.log(param);  
        this.getArtista(param['id']);
        this.getTopTracks(param['id']);

    });
  }

  getArtista(id:string){
    this.loadingArtista = true;
    this.sptifyservice.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loadingArtista = false;
      console.log(artista);
    });
  };

  getTopTracks(id:string){
    this.sptifyservice.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });
  }

}
