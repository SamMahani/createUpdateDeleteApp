$(document).ready(function(){


	 $('.getData').on('click', function() {
	 	$('.outputContainer').html('');
	 	let $outputContainer = $('.outputContainer');
	 	let searchVal = $('.searchField').val(); //saved user input
	 	let getVal = JSON.parse(localStorage.getItem(`${searchVal}`));

	 	if(getVal === null) {
	 		alert("Incorrect user input, please try again");
	 	}

	 	else {
	 		//for each instance of code, insert into site
		 	for(let key in getVal) {
		 		console.log(key, typeof key);
		 		if(key !== 'count') {
		 			let $insertThis = $(`<textarea class="codeSnippets">${getVal[key]}</textarea>`);
		 			$insertThis.prependTo($outputContainer);
		 		}
	 		}//for
	 	}//else


	 	//clear search field
	 	$('.searchField').val('');

	 });




	 $('.setData').on('click', function(){
	 	//define nameVal and codeVal to user's input
	 	let nameVal = $('.nameField').val();
	 	let codeVal = $('.codeField').val();
	 	let setVal = '{}';

	 	//retreive parsed data at key nameVal  
		let getVal = JSON.parse(localStorage.getItem(`${nameVal}`));

	    //if name does not exist as key (is null)
	 	if(getVal === null) {
	        //create new object
	 		let newObj = {
	 			count: 1,
	 		    1: codeVal,
	 		}
	        //set setVal to stringified new object
	 		setVal = JSON.stringify(newObj);
	 	}

	    //if name exists as key (not null)
	    else if(getVal !== null) {
	    	let newCount = ++getVal.count;
	    	//add new key as obj[++count] = new code value
	    	getVal[newCount] = codeVal;
	    	//set setVal to stringified updated object
	    	setVal = JSON.stringify(getVal);
	    }

	    //set local storage at key to setVal
	    localStorage.setItem(`${nameVal}`, setVal);

	    //clear name and code fields
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