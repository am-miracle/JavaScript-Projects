const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const christmas = '25 Dec 2021';

function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.round(totalSeconds/ 3600 / 24);
    const hours = Math.round(totalSeconds/ 3600) % 24;
    const mins = Math.round(totalSeconds/ 60) % 60;
    const seconds = Math.round(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000)