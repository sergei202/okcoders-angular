import { Component } from '@angular/core';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent {
	num1 = 0;
	num2 = 0;
	answer = 0;

	add() {
		this.answer = this.num1 + this.num2;
	}


}
