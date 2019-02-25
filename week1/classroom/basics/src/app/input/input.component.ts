import { Component } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	user = {};

	constructor() { }

	onSave() {
		console.log('onSave(): user=%o', this.user);
	}
}
