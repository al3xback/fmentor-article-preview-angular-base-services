import { Component } from '@angular/core';

import { BaseService } from './shared/base.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [BaseService]
})
export class AppComponent {}
