const END_OF_MONTHS = 12


$(document).ready(function(){
		let start = Number($('.selectMonth').val())
		// console.log(start)
		let value = ''


	$('a[name="prevMonth"]').click(function(event){
		event.preventDefault()
		start = $('.selectMonth option:selected').val()
		start--
		if(start < 1) start = END_OF_MONTHS
		value = '' + start
		
		$('.selectMonth').val(value).trigger('change')	

	}) 


	$('a[name="nextMonth"]').click(function(event){
		event.preventDefault()
		start = $('.selectMonth option:selected').val()
		start++
		if(start > END_OF_MONTHS) start = 1

		value = '' + start	
		$('.selectMonth').val(value).trigger('change')
	})

})