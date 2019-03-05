# Week 2 Homework

This week we'll take a step-by-step approach to create a Task Tracker app.

When we are done, this app will let us:
- Add new tasks
- Display the tasks in a table
- Assign a priority to tasks
- Assign a category to tasks
- Mark tasks complete

## Part 1: Setup
- Create a new Angular application called `task-tracker`
- Create a new component called `TaskList`
- Since we'll be using `ngModel`, add `FormsModule` to your `app.module.ts`

## Part 2: Display the Tasks
In your `TaskList` component:

- Create an array to store your tasks, here is some dummy data:
```js
[
	{name:'Clean the garage',	category:'Home',	priority:3},
	{name:'Feed the dog',		category:'Home',	priority:5},
	{name:'Study for test',		category:'School',	priority:2},
	{name:'Wash uniform',		category:'Work',	priority:3}
]
```

- Using `ngFor`, display this data in a table

## Part 3: Adding new Tasks
We now need the ability to add tasks to our Task List:

- Add an input field for Task Name
- Add an "Add Task" button
- The click handler for the button should push the task onto the tasks array and clear the input field
- Mark the button disabled if the Task Name is blank

## Part 4: Task Category
- Add an select box for users to choose the Task Category: Home, School, and Work
- The Task Category should be required to add a task

## Part 4: Task Priority
- Add a number input, 1-5, for the Task Priority
- This should default to 3 and be required
- Sort the tasks where 5 (most important) is at the top

## Part 5: Mark Tasks Complete
We now need a way to mark tasks as completed:
- Add a button next to each task that will toggle its `done` property
- Strikeout and gray out the task name if it's marked completed (remember that we can bind CSS classes to expressions)
- Move done tasks to the bottom

