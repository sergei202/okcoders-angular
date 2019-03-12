import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

	constructor() {
		console.log('Page1Component()');
	}

	ngOnInit() {
		console.log('Page1Component ngOnInit()');
	}

}
