var state = {
	list: []
}
//object with array created to place list items into

$('#js-add-button').click(function(event){
	//this is the event listener function - waiting for an event
	event.preventDefault();
	//prevents DOM from executing immediately after the event takes place
	state.list.push( {
		name:$('#shopping-list-entry').val(),
		check: false
	});
	//updates the array with the "field" element and sets the check
	renderList();
	//this runs the renderList function everytime this event is called
	//because the list is rebuilt after every event
	$('#shopping-list-entry').val('');
	//this "renames" the index number after every event which is 
	//useful after you delete an item
});

function renderList() {
	$('ul').html("");
	state.list.forEach(function(item,index) {
		var checkClass;
		//var check = item.check ? 'specialClass':'';
		if (state.list[index].check === true) {
			checkClass = 'specialClass';
		}
		else {
			checkClass = '';
		};
		$('ul').append(
		'<li class="js-item-' + index + ' ' + checkClass + '" >' + item.name + '<br>' + '<br>' +
		'<button class="js-check" item-id="'+ index +'">' + "check" + '</button>  ' +
		'<button class="js-delete" item-id="'+ index +'">' + 'delete' + '</button>' +
		'</li>');
	});
	$('.js-check').click(function(event) {
		event.preventDefault();	
		var index = $(this).attr('item-id');
			//console.log(index);
			state.list[index].check = !state.list[index].check;
			renderList();
	console.log($(this).attr('item-id'));
	});
	$('.js-delete').click(function(event) {
		event.preventDefault();	
		var index = $(this).attr('item-id');
			//console.log(index);
			state.list.splice(index,1);
			renderList();
	console.log($(this).attr('item-id'));
});
}