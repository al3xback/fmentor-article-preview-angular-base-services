import { Component, OnInit } from '@angular/core';

import { Card } from '../../shared/card';
import { BaseService } from '../../shared/base.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	card: Card;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.card;
	}

	getAuthorPostDate() {
		const date = this.card.author.postDate;
		const day = date.getDate();
		const month = date.toLocaleString('en-US', {
			month: 'short'
		});
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	}
}
