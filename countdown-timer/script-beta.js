const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const myBirthDays = '2021-10-06T00:00:00';
function countDown(){
    const myBirthDay = new Date(myBirthDays);
    console.log(myBirthDay);
    const today = new Date();
    console.log(today);

    const totalSeconds = (myBirthDay - today)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)% 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(totalSeconds);
    console.log(days);

    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(mins);
    secondsEl.innerText = formatTime(seconds);
    

}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}

countDown();
setInterval(countDown, 1000);