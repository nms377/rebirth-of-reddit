(function(window){

var contentContainer = document.getElementById('contentContainer');

function reqListener () {
	// console.log('the response text', this.responseText);

//load the data
let source = JSON.parse(this.responseText);
console.log(source);

	for (var i = 0; i < source.data.children.length; i++) {

	//create child box for each post
	var container = document.createElement('div');
	container.className = 'container';
	contentContainer.appendChild(container);

	//gets image from post
	let image = document.createElement('img');
	image.id = 'image';
	let urls = source.data.children[i].data.thumbnail;
	image.style.backgroundImage = `url('${urls}')`;

	//gets title of post
	let title = document.createElement('div');
	title.className = 'title';
	title.innerHTML = source.data.children[i].data.title;

	//gets author of post
	let author = document.createElement('div');
	author.className = 'author';
	author.innerHTML = 'created by ' + source.data.children[i].data.author;

	//gets date post was created
	let date = document.createElement('div');
	date.className = 'date';
	let postDate = moment(source.data.children[i].data.created_utc, 'X').fromNow();
	console.log(postDate);
	date.innerHTML = postDate;

	container.appendChild(image);
	container.appendChild(title);
	container.appendChild(author);
	container.appendChild(date);
	}

}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();


}(window));