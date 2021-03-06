const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=100';
fetch(url)
	.then(resp => resp.json())
	.then(function(data) {
		let authors = data.results;
		console.log(authors);
		return authors.map(function(author) {
			let li = createNode('li'),
				img = createNode('img'),
				span = createNode('span');
			img.src = author.picture.medium;
			span.innerHTML = `${author.name.first} ${author.name.last}`;
			append(li, img);
			append(li, span);
			append(ul, li);
		});
	});

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}
