import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album.model';
import { Artist } from '../../model/artist.model';
import { Track } from '../../model/trach.model';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent implements OnInit {
  artists: Artist[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];
  selectedArtistId: number | null = null;
  selectedAlbumId: number | null = null;

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.getAllArtist();
  }

  getAllArtist() {
    this.artistService.getAll().subscribe((data: Artist[]) => {
      this.artists = data;
    });
  }


}
