function getCurrentMonth(){
	let date = new Date()
	let currentMont = date.getMonth() + 1
	return currentMont
}


let currentMont = getCurrentMonth()



function genChoosingMonths(selector, currentMont){
	let totalCountOfMonths = 12
	let currentMonthLabelContainer = $('.monthNameContainer')

	let months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']

	for(let i = 1; i <= totalCountOfMonths; i++){
		if(i === currentMont){
			selector.append(`<option value="${i}" selected="selected">${months[i - 1]}</option>`)
		}else{
			selector.append(`<option value="${i}">${months[i - 1]}</option>`)
		}
	}

	let currentMonthValue = $('.selectMonth option:selected').text()
	currentMonthLabelContainer.text(currentMonthValue)

}





genChoosingMonths($('.selectMonth'), currentMont)
