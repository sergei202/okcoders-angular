import { Component } from '@angular/core';

@Component({
	selector: 'app-combo',
	templateUrl: './combo.component.html',
	styleUrls: ['./combo.component.css']
})
export class ComboComponent {
	num1 = 1;
	num2 = 1;
	num3 = 1;
	unlocked = false;
	failed = false;
	attempts = 0;		// How many failed attempts

	unlock() {
		this.unlocked = this.num1===6 && this.num2===5 && this.num3===7;
		this.failed = !this.unlocked;
		if(this.failed) this.attempts++;
	}
}
