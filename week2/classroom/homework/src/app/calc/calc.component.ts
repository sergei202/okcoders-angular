import { Component } from '@angular/core';

@Component({
	selector: 'app-calc',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.css']
})
export class CalcComponent {
	num1 = 0;
	num2 = 0;
	op = '+';
	answer = 0;

	calc() {
		switch(this.op) {
			case '+':
				this.answer = this.num1 + this.num2;
				break;
			case '-':
				this.answer = this.num1 - this.num2;
				break;
			case '*':
				this.answer = this.num1 * this.num2;
				break;
			case '/':
				this.answer = this.num1 / this.num2;
				break;
			default:
				this.answer = 0;
		}
	}
}
