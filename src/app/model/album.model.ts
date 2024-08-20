import { Track } from "./trach.model";


export interface Album {
  id: number;
  artistId: number;
  name: string;
  releaseDate: string;
  cover: string;
  tracks: Track[];
}
