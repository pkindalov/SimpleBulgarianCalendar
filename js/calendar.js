function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate()
}


$(document).ready(function () {
  let calContainer = $('#calendarContainer')
//   calContainer.append('Misho e selski bek shpek')

//default configurations

let table = $('<table></table>')
let firstRow = $('<tr></tr>')
let daysName = $('<th class="nameOfDaysBG">Пк</th><th class="nameOfDaysBG">Вт</th><th class="nameOfDaysBG">Ср</th><th class="nameOfDaysBG">Че</th><th class="nameOfDaysBG">Пе</th><th class="nameOfDaysBG">Съ</th><th class="nameOfDaysBG">Не</th>')


daysName.appendTo(firstRow)
firstRow.appendTo(table)
table.appendTo(calContainer)

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
//making default calendar for January
let daysInJanuary = daysInMonth(1, currentYear)
let januaryFirstDay = new Date(new Date().getFullYear(), 0, 1);

var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 7);
let lastDayName = lastDay.toDateString().split(" ")[0];


// alert(lastDayName)

let firstRowEndNumber = 0
    let currDate = new Date().getDate()


$('.selectMonth').on('change', function(){
    table.empty()
    table.append(firstRow)
    table.append(daysName)



    let month = Number(this.value)
    let monthDays = daysInMonth(month, currentYear)
    let monthFirstDayName = new Date(new Date().getFullYear(), month - 1, 1);
    let beginDateName = monthFirstDayName.toDateString().split(" ")[0]

    // alert(beginDateName)

    let firstDayName = januaryFirstDay.toDateString().split(" ")[0]
    let firstMonthWeekRow = $('<tr></tr>')


    switch(beginDateName){
    case 'Mon':

        for(let d = 0; d <= 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 0){
            td.text(1)
            td.addClass(`date${1}`)
            d++
            firstRowEndNumber = 8
        }else{
            td.text(d)
            td.addClass(`date${d}`)

        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

        // for(let d = 0; d <= 7; d++){
        //     let td = $('<td></td>')

        //     if(d === 0){
        //         td.text(1)
        //         d++
        //     }else {
        //         td.text(d)
        //     }

        //     firstMonthWeekRow.append(td)
        //     firstMonthWeekRow.appendTo(table)
        // }
    break

    case 'Tue':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 1){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 7
        }else if(d > 0){
            td.text(d)
            td.addClass(`date${d}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 1){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }


    break

    case 'Wed':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 2){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 6
        }else if(d > 2){
            //counter start count without empty cells and then subract -1 because one week in this format is from 0 monday to 6 sunday
            counter = d - 1
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 2){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Thu':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 3){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 5
        }else if(d > 2){
            counter = d - 2
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 3){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Fri':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 4){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 4
        }else if(d > 3){
            counter = d - 3
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 4){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Sat':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 5){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 3
        }else if(d > 4){
            counter = d - 4
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 5){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Sun':

    for(let d = 0; d <= 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 6){
            td.text(1)
            td.addClass(`date${1}`)
            d++
            firstRowEndNumber = 2
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    break

}



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


    


})




// console.log(januaryFirstDay.toDateString())
// let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)

let firstDayName = januaryFirstDay.toDateString().split(" ")[0]
let firstMonthWeekRow = $('<tr></tr>')


switch(lastDayName){
    case 'Mon':

        for(let d = 0; d <= 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 0){
            td.text(1)
            td.addClass(`date${1}`)
            d++
            firstRowEndNumber = 8
        }else{
            td.text(d)
            td.addClass(`date${d}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

        // for(let d = 0; d <= 7; d++){
        //     let td = $('<td></td>')

        //     if(d === 0){
        //         td.text(1)
        //         d++
        //     }else {
        //         td.text(d)
        //     }

        //     firstMonthWeekRow.append(td)
        //     firstMonthWeekRow.appendTo(table)
        // }
    break

    case 'Tue':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 1){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 7
        }else if(d > 0){
            td.text(d)
            td.addClass(`date${d}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 1){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }


    break

    case 'Wed':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 2){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 6
        }else if(d > 2){
            counter = d - 1
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 2){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Thu':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 3){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 5
        }else if(d > 2){
            counter = d - 2
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 3){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Fri':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 4){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 4
        }else if(d > 3){
            counter = d - 3
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 4){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Sat':

    for(let d = 0; d < 7; d++){
        let td = $('<td></td>')
        let counter = 0

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 5){
            td.text(1)
            td.addClass(`date${1}`)
            // d++
            firstRowEndNumber = 3
        }else if(d > 4){
            counter = d - 4
            td.text(counter)
            td.addClass(`date${counter}`)
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    // for(let d = 0; d <= 7; d++){
    //     let td = $('<td></td>')

    //     if(d === 5){
    //         td.text(1)
    //         d++
    //     }else {
    //         td.text(d)
    //     }

    //     firstMonthWeekRow.append(td)
    //     firstMonthWeekRow.appendTo(table)
    // }

    break

    case 'Sun':

    for(let d = 0; d <= 7; d++){
        let td = $('<td></td>')

        if(d === currDate){
            td.addClass('currentDate')
        }

        if(d === 6){
            td.text(1)
            td.addClass(`date${1}`)
            d++
            firstRowEndNumber = 2
        }


        firstMonthWeekRow.append(td)
        firstMonthWeekRow.appendTo(table)
    }

    break

}



//draw second part of the table - all rest rows without the first

//rows separator - calculate where to put new <tr> in the table . 6 is number of the week beginning from 0
let separator = firstRowEndNumber + 6


for (let col = firstRowEndNumber; col <= daysInJanuary; col++){
    let newCol = $('<td></td>')
    newCol.text(col)
    newCol.appendTo(table)
    newCol.addClass(`date${col}`)

    if(col === currDate){
        newCol.addClass(`date${col}`)
        newCol.addClass('currentDate')
    }

  

    if(col === separator ){
        // newCol.text(col + 1)

        let newRow = $('<tr></tr>')
        newRow.appendTo(table)
        separator += 7
    }


}




})
