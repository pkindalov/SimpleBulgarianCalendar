$(document).ready(function(){
            let currentDate = new Date()
            let dayNumber = currentDate.getDate()
            // alert(dayNumber)
            let dateClass = 'date' + dayNumber

            // let foundedDateCellClass = $(`.${dateClass}`).attr('class')
            // let dateCellToRemoveOldCurrDateClass = $(`.${dateClass}`)
            // let classForRemoving = foundedDateCellClass.split(" ")[0]

            // dateCellToRemoveOldCurrDateClass.removeClass(classForRemoving)
            let table = $('#calendar')
            let classForRemoving = ''

            table.each(function(){
                $(this).find('td').each(function(){
                tdCurrentClass = $(this).attr('class') + ""
                if(tdCurrentClass.indexOf('current') > -1){
                    classForRemoving = tdCurrentClass.split(" ")[0]
                    $(this).removeClass(classForRemoving)
                }
                })
            })


            let currentDateCell = $(`.${dateClass}`)
            currentDateCell.removeClass()
            currentDateCell.addClass(dateClass)
            currentDateCell.addClass(classForRemoving)              
})