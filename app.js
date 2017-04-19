var add = function(a, b) {
	return a + b;
}

/*var list = {
	items: []
};*/
//created object to for list array
//cannot get this empty object to work

var list = ["apples", "pears"];
var item = "milk";
//testing variables

var addItem = function(list, item) {
	list.push(item);
	console.log(list);
};
//created function to add items to the array

var renderList = function(list) {
	var itemsHTML = function(list) {
		return '<li>' + list + '</li>';
		console.log(itemsHTML);
	};
	//element.html(itemsHTML);
};
//created function to render HTML

$('.shopping-list-entry').submit(function(event){
	event.preventDefault();
	addItem(list, $('.js-add-button').val());
	renderList(list, $('.shopping-list'))
	console.log("hello");
})
