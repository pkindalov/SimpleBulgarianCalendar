function writeTableClassOnCodeArea(tableClass){
	let codeStr = ''
	let codeCSScontainer = $('textarea[name="tableCSScode"]')

	switch(tableClass){
		case 'januaryWall':
			codeStr = ".januaryWall{background-image: url('../images/frozen.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'februaryWall':
			codeStr = ".februaryWall{background-image: url('../images/frozen.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'marchWall':
			codeStr = ".marchWall{background-image: url('../images/greenLeaf.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'aprilWall':
			codeStr = ".aprilWall{background-image: url('../images/spring.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'mayWall':
			codeStr = ".mayWall{background-image: url('../images/goldColor.jpg'); background-repeat: no-repeat; color: black;}"
			codeCSScontainer.text(codeStr)
			break
		case 'juneWall':
			codeStr = ".juneWall{background-image: url('../images/summer.jpg'); background-repeat: no-repeat; color: black;}"
			codeCSScontainer.text(codeStr)
			break
		case 'julyWall':
			codeStr = ".julyWall{background-image: url('../images/julyOptimized.jpg'); background-repeat: no-repeat; color: black;}"
			codeCSScontainer.text(codeStr)
			break
		case 'augustWall':
			codeStr = ".augustWall{background-image: url('../images/endOfSummer.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'septemberWall':
			codeStr = ".septemberWall{background-image: url('../images/september.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'octoberWall':
			codeStr = ".octoberWall{background-image: url('../images/october.jpg'); background-repeat: no-repeat; color: black;}"
			codeCSScontainer.text(codeStr)
			break
		case 'novemberWall':
			codeStr = ".novemberWall{background-image: url('../images/november.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		case 'decemberWall':
			codeStr = ".decemberWall{background-image: url('../images/december.jpg'); background-repeat: no-repeat; color: white;}"
			codeCSScontainer.text(codeStr)
			break
		default:
			codeCSScontainer.text("No such css rule defined. Check file showTableCode.js, function writeTableClassOnCodeArea on line 1")										
			break


	}
}


function writeTableHeaderColClassOnCodeArea(thClass){
	let codeStr = ''
	let codeCSScontainer = $('textarea[name="tableCSScode"]')
	codeCSScontainer.append("\n")

	switch(thClass){
		case 'january':
			codeStr = ".january{background-color: #42b6f4; opacity: 0.6; color: black;}"
			codeCSScontainer.append(codeStr)
			break
		case 'february':
			codeStr = ".february{background-color: #b6e2f9; opacity: 0.8; color: black;}"
			codeCSScontainer.append(codeStr)
			break;
		case 'march':
			codeStr = ".march{background-color: #84f988; opacity: 0.6; color: black;}"
			codeCSScontainer.append(codeStr)
			break
		case 'april':
			codeStr = ".april{background-color: #39ef3f; color: black; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'may':
			codeStr = ".may{background-color: #f9f745; color: black; opacity: 0.8;}"
			codeCSScontainer.append(codeStr)
			break
		case 'june':
			codeStr = ".june{background-color: #fce411; color: black; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'july':
			codeStr = ".july{background-color: #f9a11d; color: black; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'august':
			codeStr = ".august{background-color: #f93e1d; color: black; opacity: 0.6;}"	
			codeCSScontainer.append(codeStr)
			break
		case 'september':
			codeStr = ".september{background-color: #fc0008; color: white; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'october':
			codeStr = ".october{background-color: #9e7ef7; color: black; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'november':
			codeStr = ".november{background-color: #662ffc; color: white; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'december':
			codeStr = ".december{background-color: #332ffc; color: white; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		default:
			codeCSScontainer.text("No such css rule defined. Check file showTableCode.js, function writeTableHeaderColClassOnCodeArea on line 63")
			break				

	}
}


function writeMainTableThTrClassOnCodeArea(){
	
	const mainTrThClasses = "td,th{padding: 31px; text-align: center;}"

	let codeCSScontainer = $('textarea[name="tableCSScode"]')
	codeCSScontainer.append("\n")
	codeCSScontainer.append(mainTrThClasses)
	codeCSScontainer.append("\n")

}


function writeCurrentDayClassOnCodeArea(currentDayClass){
	let codeStr = ''
	let codeCSScontainer = $('textarea[name="tableCSScode"]')
	codeCSScontainer.append("\n")


	switch(currentDayClass.split(" ")[0]){
		case 'currentDayJanuary':
			codeStr = ".currentDayJanuary{background-color: #42b6f4; opacity: 0.6; color: black; font-weight: bold;}"
			codeCSScontainer.append(codeStr)  
			break
		case 'currentDayFebruary':
			codeStr = ".currentDayFebruary{background-color: #b6e2f9; opacity: 0.6; color: black; font-weight: bold;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayMarch':
			codeStr = ".currentDayMarch{background-color: #84f988; opacity: 0.6; color: black; font-weight: bold;}"	
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayApril':
			codeStr = ".currentDayApril{background-color: #39ef3f; opacity: 0.6; color: black; font-weight: bold;}"
			codeCSScontainer.append(codeStr)	
			break
		case 'currentDayMay':
			codeStr = ".currentDayMay{background-color: #f9f745; color: black; opacity: 0.8; font-weight: bold;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayJune':
			codeStr = ".currentDayJune{background-color: #fce411; color: black; font-weight: bold; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayJuly':
			codeStr = ".currentDayJuly{background-color: #f9a11d; color: black; font-weight: bold; opacity: 0.6;}"	
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayAugust':
			codeStr = ".currentDayAugust{background-color: #f93e1d; color: black; font-weight: bold; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDaySeptember':
			codeStr = ".currentDaySeptember{background-color: #fc0008; color: white; font-weight: bold; opacity: 0.6;}"	
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayOctober':
			codeStr = ".currentDayOctober{background-color: #9e7ef7; color: black; font-weight: bold; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayNovember':
			codeStr = ".currentDayNovember{background-color: #662ffc; color: white; font-weight: bold; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		case 'currentDayDecember':
			codeStr = ".currentDayDecember{background-color: #332ffc; color: white; font-weight: bold; opacity: 0.6;}"
			codeCSScontainer.append(codeStr)
			break
		default:
			codeCSScontainer.text("No such css rule defined. Check file showTableCode.js, function writeCurrentDayClassOnCodeArea on line 139")
			break				
											
	}
}


 function writeCSS(){
	let tableRows = $('#calendar')
		let currentElementClass = ''
		let thClass = ''
		let tableClass = $('#calendar').attr('class')
		let currentDayClass = ''
		let tdCurrentClass = ''

		tableRows.each(function(){
			currentElementClass = $(this).find('th').attr('class')

			if(currentElementClass != undefined){

				thClass = currentElementClass 
			}


			$(this).find('td').each(function(){
				tdCurrentClass = $(this).attr('class') + ""
				if(tdCurrentClass.indexOf('current') > -1){
					currentDayClass = tdCurrentClass
				}
			})

		})


		writeTableClassOnCodeArea(tableClass)
		writeTableHeaderColClassOnCodeArea(thClass)
		writeMainTableThTrClassOnCodeArea()
		writeCurrentDayClassOnCodeArea(currentDayClass)
		// writeTableContainerClassOnCodeArea()	
		// console.log(thClass)
		// console.log(tableClass)
}






$(document).ready(function(){
	let codeField = $('textarea[name="tableCode"]')
	let cssCodeField = $('textarea[name="tableCSScode"]')
	let getCodeFrom = $('#calendarContainer')
	let isCodeFieldShow = false
	let isCSScodeFieldShow = false

	codeField.hide()
	cssCodeField.hide()

	$('a[name="showTableCode"]').click(function(){
		isCodeFieldShow = !isCodeFieldShow

		if(isCodeFieldShow){
			codeField.val(getCodeFrom.html())
			codeField.show()
			$(this).text('Скрий')
		}else{	
			codeField.hide()
			$(this).text('Покажи')
		}
	})



	$('a[name="showCSS"]').click(function(){
		isCSScodeFieldShow = !isCSScodeFieldShow

		if(isCSScodeFieldShow){
			writeCSS()
			cssCodeField.show()
			$(this).text('Скрий')
		}else{
			cssCodeField.hide()
			$(this).text('Покажи')
		}
	})
})


