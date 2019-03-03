import { Component } from '@angular/core';

@Component({
	selector: 'app-arrays',
	templateUrl: './arrays.component.html',
	styleUrls: ['./arrays.component.css']
})
export class ArraysComponent {
	numbers = [1,2,3,4,5,10,20,50,100];

	numsBy1 = [];
	numsBy2 = [];
	numsBy3 = [];

	constructor() {
		for(var i=1;i<=100;i++) {
			this.numsBy1.push(i);
			if(i%2===0) this.numsBy2.push(i);
			if(i%3===0) this.numsBy3.push(i);
		}
	}
}
