export interface Card {
  id?: string;
  rank: string;
  suit: string;
  value?: number;
  image?: string;
}

export interface Deck {
  set: Card[];
}
