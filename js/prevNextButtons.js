const END_OF_MONTHS = 12
const MILLISECONDS = 3000
const LEFT_KEY = 37
const RIGHT_KEY = 39
const UP_KEY = 38
const BOTTOM_KEY = 40
const X_KEY = 88

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
		let startAutoPrevMode = ''
		let startAutoNextMode = ''
		let ifAutoPrevModeStarted = false
		let ifAutoNextModeStarted = false


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


	$('a[name="autoPrevMont"').click(function(){
		clearInterval(startAutoNextMode)
		$('.autoNextStatus').text('')
		ifAutoNextModeStarted = false

		ifAutoPrevModeStarted = !ifAutoPrevModeStarted

		if(ifAutoPrevModeStarted){
			startAutoPrevMode = setInterval(() => start = showPrevMonth(start, value), MILLISECONDS)
			$('.autoPrevStatus').text('Включен')
		} else {
			clearInterval(startAutoPrevMode)
			$('.autoPrevStatus').text('')
		}
	})


	$('a[name="autoNextMont"').click(function(){
		clearInterval(startAutoPrevMode)
		$('.autoPrevStatus').text('')
		ifAutoPrevModeStarted = false

		ifAutoNextModeStarted = !ifAutoNextModeStarted

		if(ifAutoNextModeStarted){
			startAutoNextMode = setInterval(() => start = showNextMonth(start, value), MILLISECONDS)
			$('.autoNextStatus').text('Включен')
		} else {
			clearInterval(startAutoNextMode)
			$('.autoNextStatus').text('')
		}
	})



	$(document).keydown(function(event){
		// alert(event.which)
		switch(event.which){
			case LEFT_KEY:
				start = showPrevMonth(start, value)
				codeField.val(getCodeFrom.html())
				break
			case RIGHT_KEY:
				start = showNextMonth(start, value)
				codeField.val(getCodeFrom.html())
				break
			case X_KEY:
				clearInterval(startAutoNextMode)
				clearInterval(startAutoPrevMode)
				$('.autoNextStatus').text('')
				$('.autoPrevStatus').text('')
				break;
			case UP_KEY:
				clearInterval(startAutoPrevMode)
				$('.autoPrevStatus').text('')
				startAutoNextMode = setInterval(() => start = showNextMonth(start, value), MILLISECONDS)
				$('.autoNextStatus').text('Включен')
				break;
			case BOTTOM_KEY:
				clearInterval(startAutoNextMode)
				$('.autoNextStatus').text('')
				startAutoPrevMode = setInterval(() => start = showPrevMonth(start, value), MILLISECONDS)
				$('.autoPrevStatus').text('Включен')	
				break
		}
	})


})