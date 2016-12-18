(function(window){

var contentContainer = document.getElementById('contentContainer');

function reqListener () {
	// console.log('the response text', this.responseText);

//load the data
let source = JSON.parse(this.responseText);
console.log(source);

	for (var i = 0; i < source.data.children.length; i++) {

	//create child box for each post
	let container = document.createElement('div');
	container.id = 'container';
	contentContainer.appendChild(container);

	//gets image from post
	let image = document.createElement('img');
	image.setAttribute('src', 'source.data.children[i].data.url');


	//gets title of post
	let title = document.createElement('h2'); 
	title.innerHTML = source.data.children[i].data.title;

	//gets author of post
	let author = document.createElement('p');
	author.innerHTML = source.data.children[i].data.author;
	container.appendChild(image);
	container.appendChild(title);
	container.appendChild(author);
	}

}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();


}(window));