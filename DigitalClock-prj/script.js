
let ampm=document.getElementById('ampm')
function displaytime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let seconds=padZero(dateTime.getSeconds());
    let date=dateTime.getDate();
    let month=dateTime.getMonth();
    let year=dateTime.getFullYear();
    

     let weekdays=new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        let days=weekdays[dateTime.getDay()]

    document.getElementById('hours').innerHTML=padZero(hr)  
    document.getElementById('mins').innerHTML=min
    document.getElementById('secs').
    innerHTML=seconds
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }

    document.getElementById('date').innerHTML=date
    document.getElementById('month').innerHTML=month
    document.getElementById('year').innerHTML=year
    document.getElementById('day').innerHTML=days
}



function padZero(num){
    return num<10?"0"+num:num
}


setInterval(displaytime,500)