var state = {
	list: []
}

//function to add entry to "list"

$('#js-add-button').click(function(event){
	event.preventDefault();
	state.list.push( {
		name:$('#shopping-list-entry').val(),
		check: false
	});
	
	renderList();
	/*$('ul').append(
		'<li>' + list + '<br>' + '<br>' +
		'<button id="js-check">' + "check" + '</button>  ' +
		'<button id="js-delete">' + 'delete' + '</button>' +
		'</li>');
		*/
});

function renderList() {
	$('ul').html("");
	state.list.forEach(function(item,index) {
		var check = item.check ? 'specialClass':'';
		$('ul').append(
		'<li class="js-item-' + index + ' ' + check + '" >' + item.name + '<br>' + '<br>' +
		'<button class="js-check" item-id="'+ index +'">' + "check" + '</button>  ' +
		'<button class="js-delete" item-id="'+ index +'">' + 'delete' + '</button>' +
		'</li>');
	});
}

$('.js-check').click(function(event) {
		event.preventDefault();
			var index = $(this).attr('item-id');
			console.log(index);
			state.list[index].check = true;
			renderList();
	});

$('.js-delete').click(function(event) {
	event.preventDefault();
		var index = $(this).attr('item-id');
		$('li').remove(list);
		console.log("hello");
});


/*
//global variables (global state object)
var state = {
	items: []
};
// create state

var listItemTemplate = (
	'<li>' +
	'<span class="shopping-item js-shopping-item"></span>' +
	'<div class="shopping-item-controls">' +
		'<button class="js-shopping-item-toggle">' +
			'<span class="button-label">check</span>' +
		'<button>' +
		'<button class="js-shopping-item-delete">' +
			'<span class="button-label">delete</span>' +
		'</button>' +
	'</div>' +
	'</li>'
);

//state management
function addItem(state, item) {
	state.items.push({
		displayName: item,
		checkedOff: false
	});
}

function getItem(state, itemIndex) {
	return state.items[itemIndex];
}

function deleteItem(state, itemIndex) {
	state.items.splice(itemIndex, 1);
}

//splice is calling how many items to delete

function updateItem(state, itemIndex, newItemState) {
	state.items[itemIndex] = newItemState;
}

//to modify the list - assign a new object
*/