
let ampm=document.getElementById('ampm')
function displayTime()
{
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());

    if(hr>12)
    {
        hr=hr-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec
}

    function padZero(num)
    {
        return num<10?"0"+num:num          //if single number like 3 then add 0 before its
    }
setInterval(displayTime,500)      // To fix the time interval for changing