$(document).ready(function(){


	 $('.getData').on('click', function() {
	 	let searchFieldValue = $('.searchField').val(); //saved user input
	 	let retrievedData = localStorage.getItem(`${searchFieldValue}`);


	 	console.log(retrievedData)
	 	if(retrievedData === null) {
	 		alert("Incorrect use input, try again");
	 	};

	 	$('.insertCode').text(retrievedData);
	 	$('.searchField').val('');

	 });

	 $('.setData').on('click', function(){
	 	let nameFieldValue = $('.nameField').val();
	 	let codeFieldValue = $('.codeField').val();
	    localStorage.setItem(`${nameFieldValue}`, codeFieldValue);
	    $('.nameField').val('');
	    $('.codeField').val('');

	    // $('.debugInput').text(nameFieldValue);
	    // $('.debugInput').text(codeFieldValue);
	 });


	//debut
	// $('.textField').on('keyup', function() {
	// 	let textFieldValue = $('.textField').val();
	//     $('.debug').text(textFieldValue)
	// });


});