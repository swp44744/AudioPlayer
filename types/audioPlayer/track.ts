export interface Track {
    id: string;
    url: string;
    title: string;
    artist: string;
    artwork: string;
    duration: number;
    favorit: boolean
  }

  export type Favorits = {
    id: string;
    isFavorit: boolean;
  };