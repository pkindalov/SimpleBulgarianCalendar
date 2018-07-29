function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate()
}


function drawFirsRowDaysNames(daysName, firstRow, table, calContainer){
    daysName.appendTo(firstRow)
    firstRow.appendTo(table)
    table.appendTo(calContainer)
}

function reRenderTable(table, firstRow, daysName) {
    table.empty()
    table.append(firstRow)
    table.append(daysName)
}


function drawFirstDateRowNumbersMondayAndTuesday(days, dayIndex, beginDateName, currDate, firstRowEndNumber, firstMonthWeekRow, table){
    


    for(let d = 0; d < days; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }


        switch(beginDateName){
            case 'Mon':

            if(d === dayIndex){
                td.text(1)
                td.addClass(`date${1}`)
                d++
                firstRowEndNumber = firstRowEndNumber
            }else{
                td.text(d)
                td.addClass(`date${d}`)

            }
            break

            case 'Tue':

            if(d === dayIndex){
                td.text(1)
                td.addClass(`date${1}`)
                // d++
                firstRowEndNumber = firstRowEndNumber
            }else if(d > 0){
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




function drawFirstDateRowFromWednesday (days, dayIndex, beginDateName, currDate, firstRowEndNumber, firstMonthWeekRow, table, emptyDays, decrementor) {
     for(let d = 0; d < days; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }


        if(beginDateName === "Sun"){

            if(d === dayIndex){
            td.text(1)
            td.addClass(`date${1}`)
            d++
            firstRowEndNumber = firstRowEndNumber
        }


        }else {

            if(d === dayIndex){
                td.text(1)
                td.addClass(`date${1}`)
                // d++
                firstRowEndNumber = firstRowEndNumber
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




function drawRestOfTheTableRows(firstRowEndNumber, monthDays, currDate, table) {
    let separator = firstRowEndNumber + 6


for (let col = firstRowEndNumber; col <= monthDays; col++){
    let newCol = $('<td></td>')
    newCol.text(col)
    newCol.appendTo(table)
    newCol.addClass(`date${col}`)

    if(col === currDate){
        newCol.addClass(`date${col}`)
        newCol.addClass('currentDate')
    }

  
    //this define where to put new row in the table
    if(col === separator ){
        // newCol.text(col + 1)

        let newRow = $('<tr></tr>')
        newRow.appendTo(table)
        separator += 7
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

        firstRowEndNumber = drawFirstDateRowNumbersMondayAndTuesday(8, 0, beginDateName, currDate, 8, firstMonthWeekRow, table)

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



    firstRowEndNumber = drawFirstDateRowNumbersMondayAndTuesday(7, 1, beginDateName, currDate, 7, firstMonthWeekRow, table)

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

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 2, beginDateName, currDate, 6, firstMonthWeekRow, table, 2, 1)

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

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 3, beginDateName, currDate, 5, firstMonthWeekRow, table, 2, 2)

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

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 4, beginDateName, currDate, 4, firstMonthWeekRow, table, 3, 3)

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

    firstRowEndNumber = drawFirstDateRowFromWednesday(7, 5, beginDateName, currDate, 3, firstMonthWeekRow, table, 4, 4)

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

    firstRowEndNumber = drawFirstDateRowFromWednesday(8, 6, beginDateName, currDate, 2, firstMonthWeekRow, table, 0, 0)

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



drawRestOfTheTableRows(firstRowEndNumber, monthDays, currDate, table)

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




$(document).ready(function () {
//default configurations
let calContainer = $('#calendarContainer')
let table = $('<table></table>')
let firstRow = $('<tr></tr>')
let daysName = $('<th class="nameOfDaysBG">Пк</th><th class="nameOfDaysBG">Вт</th><th class="nameOfDaysBG">Ср</th><th class="nameOfDaysBG">Че</th><th class="nameOfDaysBG">Пе</th><th class="nameOfDaysBG">Съ</th><th class="nameOfDaysBG">Не</th>')


drawFirsRowDaysNames(daysName, firstRow, table, calContainer)


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currDate = new Date().getDate()





//Dynamic generated month tables when user choose from the select options    


$('.selectMonth').on('change', function(){
   

reRenderTable(table, firstRow, daysName)
   

//This setting are about getting the choosed month from the user, calculate how many days it has, the name of the
//first day 
let month = Number(this.value)
    
drawCalendarByMonthNumber(month, currentYear, currDate, table)


})



// console.log(januaryFirstDay.toDateString())
// let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)

drawCalendarByMonthNumber(1, currentYear, currDate, table)

})