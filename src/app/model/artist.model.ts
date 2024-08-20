import { Album } from './album.model';

export interface Artist {
  id: number;
  name: string;
  genre: string[];
  bio: string;
  images: {
    url: string;
    description: string;
  }[];
  albums: Album[];
}
