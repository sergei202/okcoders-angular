import { Component } from '@angular/core';
import { TaskService }	from '../task.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
	categories = ['Home','Work','School','Play'];
	task = {name:'', category:'', priority:3, done:false};
	tasks = [];

	constructor(private taskService:TaskService) {
		this.taskService.getTasks().then((tasks:any) => {
			this.tasks = tasks;
			this.sortTasks();
		});
	}


	sortTasks() {
		this.tasks = this.tasks.sort((a,b) => {
			if(b.done && !a.done)	return -1;
			if(!b.done && a.done)	return 1;
			if(b.priority>a.priority) return 1;
			if(b.priority<a.priority) return -1;
			return 0;
		});
	}

	addTask() {
		this.tasks.push(this.task);
		this.sortTasks();
		this.task = {name:'', category:'', priority:3, done:false};
	}

	toggleTask(task) {
		task.done = !task.done;
		this.sortTasks();
	}
}
