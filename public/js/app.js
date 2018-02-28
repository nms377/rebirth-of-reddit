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
		
		//create child box for each title
		var titleContainer = document.createElement('div');
		titleContainer.className = 'titleContainer';
		container.appendChild(titleContainer);

		//gets image from post
		let image = document.createElement('img');
		image.id = 'image';
		let urls = source.data.children[i].data.thumbnail;
		image.style.backgroundImage = `url('${urls}')`;

		//gets title of post
		let title = document.createElement('h1');
		title.className = 'title';
		title.innerHTML = source.data.children[i].data.title;
		titleContainer.appendChild(title);

		//gets author of post
		let author = document.createElement('span');
		author.className = 'author';
		author.innerHTML = `by ${source.data.children[i].data.author} &#9679`;

		//gets date post was created
		let date = document.createElement('span');
		date.className = 'date';
		let postDate = moment(source.data.children[i].data.created_utc, 'X').fromNow();
		date.innerHTML = postDate +' &#9679';

		//gets number of comments
		let comments = document.createElement('span');
		comments.className = 'comments';
		comments.innerHTML = `${source.data.children[i].data.num_comments} comments`;


		container.appendChild(image);
		container.appendChild(titleContainer);
		container.appendChild(author);
		container.appendChild(date);
		container.appendChild(comments);
	}

}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();


}(window));