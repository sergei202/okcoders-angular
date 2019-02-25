import { Component } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	items = [
		{name:'One', 	color:'blue'},
		{name:'Two',	color:'red'},
		{name:'Three',	color:'green'}
	];

	constructor() { }

}
