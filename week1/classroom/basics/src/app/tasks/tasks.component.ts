import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
	tasks = [];

	task:any = {};

	constructor() { }

	addTask() {
		this.tasks.push({...this.task});
		this.task.name = '';
	}
}
