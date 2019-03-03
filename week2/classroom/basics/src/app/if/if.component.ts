import { Component } from '@angular/core';

@Component({
	selector: 'app-if',
	templateUrl: './if.component.html',
	styleUrls: ['./if.component.css']
})
export class IfComponent  {
	password = '';
	loggedIn = false;
	badPassword = false;

	login() {
		this.loggedIn = this.password === 'abc';
		this.badPassword = this.password !== 'abc';
	}
}
