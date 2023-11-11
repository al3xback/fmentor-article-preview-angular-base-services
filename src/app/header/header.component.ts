import { Component, OnInit } from '@angular/core';

import { BaseService } from '../shared/base.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title: string;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.title = this.baseService.challenge.name;
	}
}
