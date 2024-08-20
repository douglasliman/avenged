import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album.model';
import { Artist } from '../model/artist.model';
import { Track } from '../model/trach.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artistsUrl = 'http://localhost:3000/artists'; 
  private albumsUrl = 'http://localhost:3000/albums'; 
  private tracksUrl = 'http://localhost:3000/tracks'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl);
  }


  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }


  getAllTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.tracksUrl);
  }
}
