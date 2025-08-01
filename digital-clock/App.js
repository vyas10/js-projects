const myClockDiv = document.querySelector(".clock");

const myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const myMonths = ["Jan", "Feb", "March", "April", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Trying out setInterval
setInterval(()=>{
    new Date();

    let myWholeDate = new Date();
    
    const myCurrentDate = myWholeDate.getDate();
    const myDayNum = myWholeDate.getDay();
    const myMonthNum = myWholeDate.getMonth();
    const myCurrentHours = myWholeDate.getHours();
    const myCurrentMinutes = myWholeDate.getMinutes();
    const myCurrentSeconds= myWholeDate.getSeconds();
    const myCurrentMonth = myWholeDate.getMonth();

    const myMonthString = myMonths[myCurrentMonth];
    const myDayString = myDays[myDayNum];   
    
    myClockDiv.innerHTML = `${myMonthString}, ${myDayString} ${myCurrentDate} ${myCurrentHours}:${myCurrentMinutes}: ${myCurrentSeconds} `;

}, 1000)
