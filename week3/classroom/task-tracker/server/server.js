const express = require('express');
const app = express();

app.listen(8000);

console.log('Task Tracker server listening at http://localhost:8000');


const tasks = [
	{name:'Server task',		category:'School',	priority:5, done:false},
	{name:'Clean the garage',	category:'Home',	priority:3, done:false},
	{name:'Feed the dog',		category:'Home',	priority:5, done:false},
	{name:'Study for test',		category:'School',	priority:2, done:false},
	{name:'Wash uniform',		category:'Work',	priority:3, done:false}
];

app.get('/api/tasks', (req,res) => {
	res.json(tasks);
});
