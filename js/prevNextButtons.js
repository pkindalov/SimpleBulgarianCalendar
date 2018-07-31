const END_OF_MONTHS = 12

function showPrevMonth(start, value){
	start = $('.selectMonth option:selected').val()
	start--
	if(start < 1) start = END_OF_MONTHS
	value = '' + start
		
	$('.selectMonth').val(value).trigger('change')
}


function showNextMonth(start, value){
	start = $('.selectMonth option:selected').val()
	start++
	if(start > END_OF_MONTHS) start = 1
	value = '' + start	
	$('.selectMonth').val(value).trigger('change')
}





$(document).ready(function(){
		let start = Number($('.selectMonth').val())
		// console.log(start)
		let value = ''
		let codeField = $('textarea[name="tableCode"]')
		let getCodeFrom = $('#calendarContainer')


	$('a[name="prevMonth"]').click(function(event){
		event.preventDefault()

		start = showPrevMonth(start, value)
		codeField.val(getCodeFrom.html())
		// start = $('.selectMonth option:selected').val()
		// start--
		// if(start < 1) start = END_OF_MONTHS
		// value = '' + start
		
		// $('.selectMonth').val(value).trigger('change')


	}) 


	$('a[name="nextMonth"]').click(function(event){
		event.preventDefault()
		start = showNextMonth(start, value)
		codeField.val(getCodeFrom.html())
	})



	$(document).keydown(function(event){
		// alert(event.which)
		switch(event.which){
			case 37:
				start = showPrevMonth(start, value)
				codeField.val(getCodeFrom.html())
				break
			case 39:
				start = showNextMonth(start, value)
				codeField.val(getCodeFrom.html())
				break		
		}
	})


})