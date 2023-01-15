/* eslint-disable no-restricted-syntax */
import { Component, OnInit } from '@angular/core';
import { CARD_NAMES, SUITS } from './card/constants/card.constant';
import { Card, Deck } from './card/models/card.model';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'card_game';
  setCardsGame = {
    nbDeck: 4,
    cards: [] as Card[],
  };

  ngOnInit(): void {
    this.createSetCardsGame(this.setCardsGame.nbDeck);
    console.log('this.cards.cards :', this.setCardsGame.cards);
  }

  shuffle() {
    let currentIndex = this.setCardsGame.cards.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.setCardsGame.cards[currentIndex];
      this.setCardsGame.cards[currentIndex] =
        this.setCardsGame.cards[randomIndex];
      this.setCardsGame.cards[randomIndex] = temporaryValue;
    }

    return this.setCardsGame;
  }

  private createSetCardsGame(nbDeck: number) {
    for (let index = 0; index < nbDeck; index++) {
      this.createDeck();
    }
    this.shuffle();
  }

  private createDeck() {
    const deck: Deck = { set: [] };
    for (const suit of SUITS) {
      for (const name of CARD_NAMES) {
        deck.set.push({
          rank: name,
          suit,
          id: `${deck.set.length}`,
          value: this.setCardValue(name),
        });
      }
    }

    for (const card of deck.set) {
      this.setCardsGame.cards.push(card);
    }
  }

  private setCardValue(rank: string) {
    switch (rank) {
      case 'A':
        return 1;

      case '2':
        return 2;

      case '3':
        return 3;

      case '4':
        return 4;

      case '5':
        return 5;

      case '6':
        return 6;

      case '7':
        return 7;

      case '8':
        return 8;

      case '9':
        return 9;

      case '10':
        return 10;

      case 'J':
        return 10;

      case 'Q':
        return 10;

      case 'K':
        return 10;

      default:
        return undefined;
    }
  }
}
