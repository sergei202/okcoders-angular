# Week 3 Homework

This week's homework will also be your final project that we'll add on to and wrap up in class, so please complete it!

We'll also publish it to Heroku host it live for the world to see!

We're going to create a blog website with dynamic articles.  The site will be a SPA with 3 main pages:
- Home
- About
- Articles

Home and About will just be static pages without dynamic content.  Articles will show a list of articles (`ArticleList`) and will allow you to click one to see the full article (`ArticleDetail`).

We want separate views for the articles because they could get long and have lots of images in them.

## Part 1 - Setup and Framework

- Create a new Angular application with routing, I would call it `blog`
- Add bootstrap
- Create your components:
	- `Nav`
	- `Home`
	- `About`
	- `ArticleList`
	- `ArticleDetail`

So far in the course we haven't taken time to slow down and make things look _nice_.
Take some time to make this your own site.  Add text, colors, and images to Home and About.

Link `/articles` to `ArticleList` and `/articles/:id` to `ArticleDetail`.  We haven't talked about url paramaters on the frontend yet, we'll go over it in the next part.

By the end of this, you should have a SPA blog site with a Home, About, and Articles section.
You should have some type of menu/navigation on the side or top of your blog. Home and About will have static content and Articles (`ArticleList`) will be empty.

## Part 2 - Viewing Articles

### `ArticleService`
We're going to connect the backend and the database in the next step, but we still need a way to test our application with data.  We'll need to create a _stub_.  A stub is just some code that fakes or mimicks something else.  Our stub will mimick an actual backend/database.

Create an `Article` service and add some dummy articles for us to test with:

```js
const articles = [{
	_id: 1,
	date: new Date(),
	title: 'My first post!',			// title shows up on the ArticleList
	body: 'Lorem ipsum.'				// body is only for the ArticleDetail
},{
	_id: 2,
	date: new Date(),
	title: 'My second post!',
	body: 'Lorem ipsum, lorem ipsum.'
},{
	_id: 3,
	date: new Date(),
	title: 'More of my ramblings',
	body: 'Lorem ipsum.  Lorem ipsum, lorem ipsum.'
}]
```

Since we know we'll be using MongoDB, we'll fake the `id` property as `_id` so we'll have less code to change when we connect our backend.

Now we need some service methods to interact with our dummy articles.  We're going to wrap these in promises to mimick the asynchronous nature of backend calls.

We'll need 2 methods for now:
- `getArticles()`: Returns a promise of the array of articles
- `getArticle(id)`: Returns a promise of an article object 

Remember we can fake a promise by wrapping a value in `Promise.resolve(value)`.

### `ArticleList`

We can now have `ArticleList` use our service to display the articles!
We need to:
- Inject `ArticleService`
- Add an `articles` property
- Load the articles in the constructor

Remember, since `getArticles()` returns a promise, we'll need to use `.then()`:
```js
constructor(private articleService:ArticleService) {
	this.articleService.getArticles().then(articles => {
		this.articles = articles;
		console.log('getArticles: %o', articles);
	});
}
```

The last thing we need to do is make each article clickable and to take us to `ArticleDetail`.

We can use `routerLink` to do that for us:

```html
<tr *ngFor="let article of articles" routerLink="/articles/{{article._id}}">
```

Now every article you click on will take you to `articles/id`.

### `ArticleDetail`

`ArticleDetail` will display the article body.  We have a method called `getArticle()` in our service to get the article, but how do we get the id out of the url?

For that we can import `ActivatedRoute` which gives us information about the current route:

```ts
import { ActivatedRoute } from '@angular/router';
```

We can now get the id paramater:
```js
var id = route.snapshot.paramMap.get('id');
```

Use the id to get the article and display it!

## Part 3 - Adding and Editing Articles

Once you have your Article List and Detail working, we need to be able to add new articles!

We'll need to create another component, `ArticleEdit`, which will house our form and inputs.
It'll have:
- Inputs for name, title, and date*
- Textarea for the article body
- Save button

This component will let us do two tasks:
- Allow you to add a new article
- Allow you to edit an existing article

Both will also require another method to our `ArticleService`: `saveArticle(article)`.  It will take an article object and save it to our `articles` array (with the next fake `_id`) and return a Promise of that saved article.

If the article already exists (if the `_id` property is found in our `articles` array), the article is updated with whatever is passed; otherwise it gets added as a new article.

We need a separate route to create a new article and to edit an existing article.  Since we already have `/articles/:id` link to the `ArticleDetail`, we can have `/articles/:id/edit` link to `ArticleEdit`.  We can have `/articles/new` link directly to `ArticleEdit`.

Inside of `ArticleEdit`, we'll know if we are editing or creating a new article based on the `id` param; if it is empty then it's a new article, otherwise we're editing an existing one.

One more thing that you'll notice is that once you save an article, hitting the back button (or changing the url) will cause all of our data to be reset.  This is because our 'database' is in memory.  Anytime we change the url (or use the back button, which changes it for us), we cause Angular to completely reload, losing our changes.

We get around this by adding navigation links inside our app:
- Add a "Back to Articles" link/button to `ArticleDetail` and `ArticleEdit`
- Add a link/button to `articles/new` inside of `ArticleList`
- Add a link/button link inside of `ArticleDetail`

Don't forget that we need to use `routerLink`, not `href` for this.  Here's an example of what the Back button will look like:

```html
<a class="btn btn-primary" routerLink="/articles">Back to Articles</a>
```

Once we switch to using a backend, we won't have that restriction.


### * Dates in Angular
Dates with ngModel are a little strange.  We can't use ngModel like we usually do (`[(ngModel)]`), but we'll have to break it up into setting the value and reading the value.  The reason for this is that the date input field expects the value as a string in the format of `yyyy-MM-dd`, but our code wants a date object, not a string.

Breaking it up results in something like this:
```html
<input type="date" name="date" [value]="article.date | date:'yyyy-MM-dd'" (input)="article.date=parseDate($event.target.value)">
```

We'll also have to add a `parseDate()` method to our `ArticleEdit` controller:
```ts
parseDate(str) {
	return new Date(str);
}
```

We'll talk more in class about this.