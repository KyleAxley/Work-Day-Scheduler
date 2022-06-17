$(document).ready(function(){
    $('.saveBtn').on('click',function(){
        //store in localstorage
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    })

    function hourUpdater(){
        var currentHour = moment().hour()
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('r')[1])
            if(currentHour > blockHour) {
                $(this).addClass("past")
            }
            else if(currentHour === blockHour) {
                $(this).addClass("present")
            }
            else{
                $(this).addClass("future")
            }
        })

    }
    hourUpdater()

    $('#hour9 .description').val(localStorage.getItem('hour9'))
    $('#hour10 .description').val(localStorage.getItem('hour10'))
    $('#hour11 .description').val(localStorage.getItem('hour11'))
    $('#hour12 .description').val(localStorage.getItem('hour12'))
    $('#hour1 .description').val(localStorage.getItem('hour1'))
    $('#hour2 .description').val(localStorage.getItem('hour2'))
    $('#hour3 .description').val(localStorage.getItem('hour3'))
    $('#hour4 .description').val(localStorage.getItem('hour4'))
    $('#hour5 .description').val(localStorage.getItem('hour5'))

})