import { Component, OnInit } from '@angular/core';

import { BaseService } from '../shared/base.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	creator: { name: string; link: string };
	coder: { name: string; gitHubLink: string };

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.creator = this.baseService.challenge.creator;
		this.coder = this.baseService.challenge.coder;
	}
}
