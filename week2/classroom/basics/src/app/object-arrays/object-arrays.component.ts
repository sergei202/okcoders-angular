import { Component } from '@angular/core';

@Component({
	selector: 'app-object-arrays',
	templateUrl: './object-arrays.component.html',
	styleUrls: ['./object-arrays.component.css']
})
export class ObjectArraysComponent {
	friends = [
		{name:'Mike',	phone:'1234567880', rank:8},
		{name:'Susan',	phone:'1884567880', rank:7},
		{name:'Sean',	phone:'4884567889', rank:6},
		{name:'Katie',	phone:'3778333880',	rank:9}
	];
	newFriend = {name:'', phone:'', rank:null};

	constructor() {
		this.sortFriends();
	}

	sortFriends() {
		this.friends = this.friends.sort((a,b) => {
			return b.rank-a.rank;
		});
	}

	addFriend() {
		this.friends.push(this.newFriend);
		this.newFriend = {name:'', phone:'', rank:null};
		this.sortFriends();
	}

}
