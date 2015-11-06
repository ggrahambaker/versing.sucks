$( document ).ready(function() {

	init();
	
  $('.opts').hover(function() {
    $(this).css('border-bottom', '2px solid #ff0000');
    }, function() {
      $(this).css('border-style', 'none');
  });

	$('#versing').click(function() {
    $('#versing').append('<img class="logo" src="logo.png">');
		var size = $('.logo').css('height');
    console.log(size + ' size ');
    var newSize = pxPeeler(size);
    console.log(newSize + ' ->> ');
    $('.logo').css('height', newSize);

		}
	);

	function pxPeeler(val){
		var i = 0;
		var toRet = '';
		while(val.charAt(i) != 'p'){
			toRet += val.charAt(i);
			i++;
		}
		console.log(toRet + ' in px peel');
		toRet *= (parseFloat(".92"));
		return toRet + 'px';
	}			
  $('.ret').click(function () {
    console.log(':)');
    return false;
  });
});

 var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1I4ttgC67oMOIiL2iCBz4rhoaVJ2SagXClcoIFCiWvN0/pubhtml?gid=0&single=true';
 var sheet_new_data;
 var sheet_old_data;
 function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo } )
 }

  function showInfo(data, tabletop) {
    $.each( tabletop.sheets(), function(i, sheet) {

    	if(sheet.name === 'Old'){
    		
    		$('#old_show').append(tabler(sheet))
    	}
    	if(sheet.name === 'Shows'){
    		
    		$('#new_show').append(tabler(sheet)) 
    	}
    })
  }

  function tabler(sheet){
  	// console.log(sheet.name)
  	var sheetItems = sheet.all()
  	
  	var sheetContent = '<thead><tr><th>Date</th><th>Day</th><th>City</th><th>Location</th></tr></thead><tbody>';


  	for (var i = 0; i < sheetItems.length; i++) {
  		// console.log(sheetItems[i])
  		sheetContent += '<tr>'
  		sheetContent += '<td class="cell">' + sheetItems[i]['Date'] + '</td>'
  		sheetContent += '<td class="cell">' + sheetItems[i]['Day'] + '</td>'
  		sheetContent += '<td class="cell">' + sheetItems[i]['City'] + '</td>'
  		sheetContent += '<td class="cell">' + '<a class="ret" href="' + sheetItems[i]['FB Event'] + '" > ' + sheetItems[i]['Location']+ '</a>' + '</td>'
  		sheetContent += '</tr>'
  	}

  	sheetContent += '</tbody>'
  	return sheetContent;
  }

