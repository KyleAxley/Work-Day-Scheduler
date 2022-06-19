$(document).ready(function(){
    //display current day & time at the top of the page
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $('.saveBtn').on('click',function(){
        //store in localstorage
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    })
    //get current number of hours
    function hourUpdater(){
        var currentHour = moment().hour()
        //loop over time blocks, checks to see if we are past,present or future.  
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('r')[1])
            if(currentHour > blockHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if(currentHour === blockHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else{
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

    }
    hourUpdater()
    //load any saved data from localstoarge - do this for each hour created
    $('#hour9 .description').val(localStorage.getItem('hour9'))
    $('#hour10 .description').val(localStorage.getItem('hour10'))
    $('#hour11 .description').val(localStorage.getItem('hour11'))
    $('#hour12 .description').val(localStorage.getItem('hour12'))
    $('#hour13 .description').val(localStorage.getItem('hour13'))
    $('#hour14 .description').val(localStorage.getItem('hour14'))
    $('#hour15 .description').val(localStorage.getItem('hour15'))
    $('#hour16 .description').val(localStorage.getItem('hour16'))
    $('#hour17 .description').val(localStorage.getItem('hour17'))

})