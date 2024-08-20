import { Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

export const routes: Routes = [
  {
    path: '',
    component: ArtistComponent,
  },
  {
    path: 'Album',
    component: AlbumComponent,
  }
];
