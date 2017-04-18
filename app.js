var list = {
	items: []
};
//created object to for list array

var addItem = function(list, item) {
	list.items.push(item);
};

//created function to take array and add item to the list

var renderList = function(list, element) {
	var itemsHTML = list.items.map(function(item) {
		return '<li>' + item + '</li>';
	});
	element.html(itemsHTML);
};

//created function to render HTML

$('.shopping-list-entry').submit(function(event){
	event.preventDefault();
	addItem(list, $('.js-add-button').val());
	renderList(list, $('.shopping-list'))
	console.log("hello");
})