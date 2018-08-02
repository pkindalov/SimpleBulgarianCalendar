const FIRST_DATE = 1
const DATE_START_INDEX = 0
const WEEKDAYS_WITHOUT_ONE = 6
const WEEKDAYS_COUNT = 7



function chooseColorSchemaForMonth(month){
    // let daysName = $('<th class="nameOfDaysBG">Пк</th><th class="nameOfDaysBG">Вт</th><th class="nameOfDaysBG">Ср</th><th class="nameOfDaysBG">Че</th><th class="nameOfDaysBG">Пе</th><th class="nameOfDaysBG">Съ</th><th class="nameOfDaysBG">Не</th>')
    

    switch(month){
        case 1:
            return $('<th class="january">Пк</th><th class="january">Вт</th><th class="january">Ср</th><th class="january">Че</th><th class="january">Пе</th><th class="january">Съ</th><th class="january">Не</th>')
        case 2:
            return $('<th class="february">Пк</th><th class="february">Вт</th><th class="february">Ср</th><th class="february">Че</th><th class="february">Пе</th><th class="february">Съ</th><th class="february">Не</th>')    
        case 3:
            return $('<th class="march">Пк</th><th class="march">Вт</th><th class="march">Ср</th><th class="march">Че</th><th class="march">Пе</th><th class="march">Съ</th><th class="march">Не</th>')    
        case 4:
            return $('<th class="april">Пк</th><th class="april">Вт</th><th class="april">Ср</th><th class="april">Че</th><th class="april">Пе</th><th class="april">Съ</th><th class="april">Не</th>')    
        case 5:
            return $('<th class="may">Пк</th><th class="may">Вт</th><th class="may">Ср</th><th class="may">Че</th><th class="may">Пе</th><th class="may">Съ</th><th class="may">Не</th>')    
        case 6:
            return $('<th class="june">Пк</th><th class="june">Вт</th><th class="june">Ср</th><th class="june">Че</th><th class="june">Пе</th><th class="june">Съ</th><th class="june">Не</th>')    
        case 7:
            return $('<th class="july">Пк</th><th class="july">Вт</th><th class="july">Ср</th><th class="july">Че</th><th class="july">Пе</th><th class="july">Съ</th><th class="july">Не</th>')    
        case 8:
            return $('<th class="august">Пк</th><th class="august">Вт</th><th class="august">Ср</th><th class="august">Че</th><th class="august">Пе</th><th class="august">Съ</th><th class="august">Не</th>')    
        case 9:    
            return $('<th class="september">Пк</th><th class="september">Вт</th><th class="september">Ср</th><th class="september">Че</th><th class="september">Пе</th><th class="september">Съ</th><th class="september">Не</th>')
        case 10:
            return $('<th class="october">Пк</th><th class="october">Вт</th><th class="october">Ср</th><th class="october">Че</th><th class="october">Пе</th><th class="october">Съ</th><th class="october">Не</th>')    
        case 11:
            return $('<th class="november">Пк</th><th class="november">Вт</th><th class="november">Ср</th><th class="november">Че</th><th class="november">Пе</th><th class="november">Съ</th><th class="november">Не</th>')    
        case 12:    
            return $('<th class="december">Пк</th><th class="december">Вт</th><th class="december">Ср</th><th class="december">Че</th><th class="december">Пе</th><th class="december">Съ</th><th class="december">Не</th>')
        default:
            return $('<th class="january">Пк</th><th class="january">Вт</th><th class="january">Ср</th><th class="january">Че</th><th class="january">Пе</th><th class="january">Съ</th><th class="january">Не</th>')   
    }

}


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate()
}


function drawFirsRowDaysNames(daysName, firstRow, table, calContainer){
    firstRow.empty()
    daysName.appendTo(firstRow)
    firstRow.appendTo(table)
    table.appendTo(calContainer)
}

function reRenderTable(table, firstRow, daysName) {
    table.empty()
    table.append(firstRow)
    table.append(daysName)
}

function getClassForMonth(month){
    switch(month){
        case 1:
            return 'currentDayJanuary'
        case 2:
            return 'currentDayFebruary'
        case 3:
            return 'currentDayMarch'
        case 4:
            return 'currentDayApril'
        case 5:
            return 'currentDayMay'
        case 6:
            return 'currentDayJune'
        case 7:
            return 'currentDayJuly'
        case 8:
            return 'currentDayAugust'
        case 9:
            return 'currentDaySeptember'
        case 10:
            return 'currentDayOctober'
        case 11:
            return 'currentDayNovember'
        case 12:
            return 'currentDayDecember'                                            
        default:
            return 'currentDayJanuary'    
    }
}


function drawFirstDateRowNumbersMondayAndTuesday(days, dayIndex, beginDateName, currDate, firstRowEndNumber, firstMonthWeekRow, table, month){
    


    for(let d = 0; d < days; d++){
        let td = $('<td></td>')


        

        switch(beginDateName){
            case 'Mon':

        if(d  === currDate - 1){
            let classForCurrentMonth = getClassForMonth(month)
            td.addClass(classForCurrentMonth)
        }
            

            if(d === dayIndex){
                td.text(FIRST_DATE)
                td.addClass(`date${FIRST_DATE}`)
                d++
                currDate++

                firstRowEndNumber = firstRowEndNumber


            }else{
                td.text(d)
                td.addClass(`date${d}`)

            }
            break

            case 'Tue':

            if(d === currDate){
                let classForCurrentMonth = getClassForMonth(month)
                td.addClass(classForCurrentMonth)
            }


            if(d === dayIndex){
                td.text(FIRST_DATE)
                td.addClass(`date${FIRST_DATE}`)

                // d++
                firstRowEndNumber = firstRowEndNumber
                // let classForCurrentMonth = getClassForMonth(month)
                // td.addClass(classForCurrentMonth)
            }else if(d > DATE_START_INDEX){
                td.text(d)
                td.addClass(`date${d}`)
            }
    

            break
        }



        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)

    }

    return firstRowEndNumber

}




function drawFirstDateRowFromWednesday (days, dayIndex, beginDateName, currDate, firstRowEndNumber, firstMonthWeekRow, table, emptyDays, decrementor, month) {
     for(let d = 0; d < days; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate + emptyDays){
            let classForCurrentMonth = getClassForMonth(month)
            td.addClass(classForCurrentMonth)
        }


        if(beginDateName === "Sun"){

            if(d === dayIndex){
            td.text(FIRST_DATE)
            td.addClass(`date${FIRST_DATE}`)
            d++
            firstRowEndNumber = firstRowEndNumber

        }


        }else {

            if(d === dayIndex){
                td.text(FIRST_DATE)
                td.addClass(`date${FIRST_DATE}`)
                // d++
                firstRowEndNumber = firstRowEndNumber

                // let classForCurrentMonth = getClassForMonth(month)
                // td.addClass(classForCurrentMonth)

            }else if(d > emptyDays){
                //counter start count without empty cells and then subract -1 because one week in this format is from 0 monday to 6 sunday
                counter = d - decrementor
                td.text(counter)
                td.addClass(`date${counter}`)
            }
        }




        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

     return firstRowEndNumber
}




function drawRestOfTheTableRows(firstRowEndNumber, monthDays, currDate, table, month) {
    let separator = firstRowEndNumber + WEEKDAYS_WITHOUT_ONE


for (let col = firstRowEndNumber; col <= monthDays; col++){
    let newCol = $('<td></td>')
    newCol.text(col)
    newCol.appendTo(table)
    newCol.addClass(`date${col}`)

    if(col === currDate){
        newCol.addClass(`date${col}`)

        let classForCurrentMonth = getClassForMonth(month)
        newCol.addClass(classForCurrentMonth)

        
    }

  
    //this define where to put new row in the table
    if(col === separator ){
        // newCol.text(col + 1)

        let newRow = $('<tr></tr>')
        newRow.appendTo(table)
        separator += WEEKDAYS_COUNT
    }


}
}





function drawCalendarByMonthNumber(month,currentYear, currDate, table){
    let monthDays = daysInMonth(month, currentYear)
    let monthFirstDayName = new Date(new Date().getFullYear(), month - 1, 1);
    let beginDateName = monthFirstDayName.toDateString().split(" ")[0]


    

    let firstMonthWeekRow = $('<tr></tr>')
    let firstRowEndNumber = 8


    switch(beginDateName){
    case 'Mon':

        firstRowEndNumber = drawFirstDateRowNumbersMondayAndTuesday(8, 0, beginDateName, currDate, 8, firstMonthWeekRow, table, month)

    //     for(let d = 0; d < 8; d++){
    //     let td = $('<td></td>')

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 0){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         d++
    //         firstRowEndNumber = 8
    //     }else{
    //         td.text(d)
    //         td.addClass(`date${d}`)

    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

        
    break

    case 'Tue':



    firstRowEndNumber = drawFirstDateRowNumbersMondayAndTuesday(7, 1, beginDateName, currDate, 7, firstMonthWeekRow, table, month)

    // for(let d = 0; d < 7; d++){
    //     let td = $('<td></td>')

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 1){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         // d++
    //         firstRowEndNumber = 7
    //     }else if(d > 0){
    //         td.text(d)
    //         td.addClass(`date${d}`)
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

   


    break

    case 'Wed':

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 2, beginDateName, currDate, 6, firstMonthWeekRow, table, 1, 1, month)

    // for(let d = 0; d < 7; d++){
    //     let td = $('<td></td>')
    //     let counter = 0

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 2){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         // d++
    //         firstRowEndNumber = 6
    //     }else if(d > 2){
    //         //counter start count without empty cells and then subract -1 because one week in this format is from 0 monday to 6 sunday
    //         counter = d - 1
    //         td.text(counter)
    //         td.addClass(`date${counter}`)
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    

    break

    case 'Thu':

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 3, beginDateName, currDate, 5, firstMonthWeekRow, table, 2, 2, month)

    // for(let d = 0; d < 7; d++){
    //     let td = $('<td></td>')
    //     let counter = 0

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 3){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         // d++
    //         firstRowEndNumber = 5
    //     }else if(d > 2){
    //         counter = d - 2
    //         td.text(counter)
    //         td.addClass(`date${counter}`)
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

   

    break

    case 'Fri':

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 4, beginDateName, currDate, 4, firstMonthWeekRow, table, 3, 3, month)

    // for(let d = 0; d < 7; d++){
    //     let td = $('<td></td>')
    //     let counter = 0

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 4){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         // d++
    //         firstRowEndNumber = 4
    //     }else if(d > 3){
    //         counter = d - 3
    //         td.text(counter)
    //         td.addClass(`date${counter}`)
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    

    break

    case 'Sat':

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 5, beginDateName, currDate, 3, firstMonthWeekRow, table, 4, 4, month)

    // for(let d = 0; d < 7; d++){
    //     let td = $('<td></td>')
    //     let counter = 0

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 5){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         // d++
    //         firstRowEndNumber = 3
    //     }else if(d > 4){
    //         counter = d - 4
    //         td.text(counter)
    //         td.addClass(`date${counter}`)
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    

    break

    case 'Sun':

    firstRowEndNumber = drawFirstDateRowFromWednesday(8, 6, beginDateName, currDate, 2, firstMonthWeekRow, table, 5, 0, month)

    // for(let d = 0; d < 8; d++){
    //     let td = $('<td></td>')

    //     if(d === currDate){
    //         td.addClass('currentDate')
    //     }

    //     if(d === 6){
    //         td.text(1)
    //         td.addClass(`date${1}`)
    //         d++
    //         firstRowEndNumber = 2
    //     }


    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

}



drawRestOfTheTableRows(firstRowEndNumber, monthDays, currDate, table, month)

// let separator = firstRowEndNumber + 6


// for (let col = firstRowEndNumber; col <= monthDays; col++){
//     let newCol = $('<td></td>')
//     newCol.text(col)
//     newCol.appendTo(table)
//     newCol.addClass(`date${col}`)

//     if(col === currDate){
//         newCol.addClass(`date${col}`)
//         newCol.addClass('currentDate')
//     }

  
//     //this define where to put new row in the table
//     if(col === separator ){
//         // newCol.text(col + 1)

//         let newRow = $('<tr></tr>')
//         newRow.appendTo(table)
//         separator += 7
//     }


// }

}



function getMonthNameBG(month){

    switch(month){
        case 1:
            return 'Януари'

        case 2: 
            return 'Февруари'

        case 3:
        
            return 'Март'

        case 4:

            return 'Април'

        case 5:
        
            return 'Май'

        case 6:

            return 'Юни'

        case 7:
        
            return 'Юли'

        case 8:
        
            return 'Август'

        case 9:
        
            return 'Септември'

        case 10:

            return 'Октомври'

        case 11:

            return 'Ноември'

        case 12:
        
            return 'Декември'                                        
        default:

            return 'Януари'

    }
}



function writeMonthName(month){
    let monthNameBG = getMonthNameBG(month)
    let monthNameCont = $('.monthNameContainer')

    monthNameCont.text(monthNameBG)

}


function changeBackground(month){
    let container = $('#calendar')
    container.removeClass()

    switch(month){
        case 1:
            container.addClass('januaryWall')
            break

        case 2:
            container.addClass('februaryWall')
            break

        case 3:
            container.addClass('marchWall')
            break

        case 4:
            container.addClass('aprilWall')
            break

        case 5:
            container.addClass('mayWall')
            break

        case 6:
            container.addClass('juneWall')
            break

        case 7:
            container.addClass('julyWall')
            break

        case 8:
            container.addClass('augustWall')
            break

        case 9:
            container.addClass('septemberWall')
            break

        case 10:
            container.addClass('octoberWall')
            break

        case 11:
            container.addClass('novemberWall')
            break

        case 12:
            container.addClass('decemberWall')
            break                                

        default:
            container.addClass('januaryWall')
        break        
    }
}


function changeBackgroundOfContainer(month){
    let container = $('#mainContainer')
    container.removeClass()

    container.addClass('container-fluid')

    switch(month){
        case 1:
            container.addClass('mainContainerJanuaryWall')
            break

        case 2:
            container.addClass('mainContainerFebruaryWall')
            break

        case 3:
            container.addClass('mainContainerMarchWall')
            break

        case 4:
            container.addClass('mainContainerAprilWall')
            break

        case 5:
            container.addClass('mainContainerMayWall')
            break

        case 6:
            container.addClass('mainContainerJuneWall')
            break

        case 7:
            container.addClass('mainContainerJulyWall')
            break

        case 8:
            container.addClass('mainContainerAugustWall')
            break

        case 9:
            container.addClass('mainContainerSeptemberWall')
            break

        case 10:
            container.addClass('mainContainerOctoberWall')
            break

        case 11:
            container.addClass('mainContainerNovemberWall')
            break

        case 12:
            container.addClass('mainContainerDecemberWall')
            break                                

        default:
            container.addClass('januaryWall')
        break        
    }
}




$(document).ready(function () {
//default configurations
let calContainer = $('#calendarContainer')
let table = $('<table id="calendar" class="januaryWall"></table>')
let firstRow = $('<tr></tr>')
// let daysName = $('<th class="nameOfDaysBG">Пк</th><th class="nameOfDaysBG">Вт</th><th class="nameOfDaysBG">Ср</th><th class="nameOfDaysBG">Че</th><th class="nameOfDaysBG">Пе</th><th class="nameOfDaysBG">Съ</th><th class="nameOfDaysBG">Не</th>')

let daysName = chooseColorSchemaForMonth(1)
drawFirsRowDaysNames(daysName, firstRow, table, calContainer)


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currDate = new Date().getDate()





//Dynamic generated month tables when user choose from the select options    


$('.selectMonth').on('change', function(){
   

   

//This setting are about getting the choosed month from the user, calculate how many days it has, the name of the
//first day 
let month = Number(this.value)

daysName = chooseColorSchemaForMonth(month)

changeBackground(month)
changeBackgroundOfContainer(month)

reRenderTable(table, firstRow, daysName)
drawFirsRowDaysNames(daysName, firstRow, table, calContainer)


    
writeMonthName(month)    
drawCalendarByMonthNumber(month, currentYear, currDate, table)


})



// console.log(januaryFirstDay.toDateString())
// let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)


drawCalendarByMonthNumber(1, currentYear, currDate, table)

})