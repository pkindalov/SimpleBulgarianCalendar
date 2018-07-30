$(document).ready(function(){
	let codeField = $('textarea[name="tableCode"]')
	let getCodeFrom = $('#calendarContainer')
	let isCodeFieldShow = false
	codeField.hide()

	$('a[name="showTableCode"]').click(function(){
		isCodeFieldShow = !isCodeFieldShow

		if(isCodeFieldShow){
			codeField.val(getCodeFrom.html())
			codeField.show()
		}else{	
			codeField.hide()
		}
	})
})