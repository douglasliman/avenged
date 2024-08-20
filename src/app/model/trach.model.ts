export interface Track {
  id: number;
  albumId: number; // Relacionamento com o álbum
  name: string;
  duration: string; // Duração da faixa
}
