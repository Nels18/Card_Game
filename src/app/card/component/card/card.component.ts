import { Component, Input, OnInit } from '@angular/core';
import { CARD_IMG } from '../../constants/card.constant';

@Component({
  selector: 'cg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() rank: string = '';
  @Input() suit: string = '';
  @Input() value: number | undefined;
  @Input() image: string | undefined;

  ngOnInit(): void {
    if (this.id) {
      this.image = `${CARD_IMG.BASE_URL}${CARD_IMG.BASE_NAME.replace(
        '{id}',
        Number(this.id) < 10 ? `0${this.id}` : this.id
      )}`;
    }
  }
}
