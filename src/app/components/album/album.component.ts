import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album.model';
import { Track } from '../../model/trach.model';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  tracks: Track[] = [];
  selectedAlbumId: number | null = null;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums() {
    this.artistService.getAllAlbums().subscribe((data: Album[]) => {
      this.albums = data; 
    });
  }

  loadTracks(albumId: number) {
    this.artistService.getAllTracks().subscribe((data: Track[]) => {
      this.tracks = data.filter(track => track.albumId === albumId);
      this.selectedAlbumId = albumId;
    });
  }
}
