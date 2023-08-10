
// Fetch the items from the JSON file.
function loadItems() {
	return fetch('data/data.json')
	// .then(response => console.log(response));
	.then(response => response.json()) // Change response.body to the object of JSON.
	// .then(json => console.log(json));
	.then(json => json.items);
}

// Update the list with the given items.
function displayItems(items) {
	const itemList = document.querySelector('.items');
	itemList.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given item.
function createHTMLString(item) {
	return `
		<li class="item">
			<img src="${item.image}" alt="${item.type}" class="item_thumbnail">
			<span class="item_description">${item.gender}, ${item.size}</span>
		</li>
	`;
}

function onButtonClick(e, items) {
	const dataset = e.target.dataset;
	const key = dataset.key;
	const value = dataset.value;

	if(key === null || value === null) {
		return;
	}

	const filtered = items.filter(item => item[key] === value);
	
	displayItems(filtered);

	// console.log(filtered);
	// console.log(e.target.dataset.key);
	// console.log(e.target.dataset.value);
}

function setEventListeners(items) {
	const logo = document.querySelector('.logo');
	const btns = document.querySelector('.btns');

	logo.addEventListener('click', () => {
		displayItems(items);
	});

	btns.addEventListener('click', (e) => {
		onButtonClick(e, items);
	});
}

loadItems()
	.then(items => {
		// console.log(items);
		displayItems(items);
		setEventListeners(items);    
	})
	.catch(console.log);