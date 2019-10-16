let hour_hand = document.getElementById('hour_hand');
let minute_hand = document.getElementById('minute_hand');
let second_hand = document.getElementById('second_hand');

let date = new Date();

function getClockHour() {
	let hourToDegrees = (new Date().getHours()) * 15;
  document.getElementById("hour_hand").style.transform = `rotate(${hourToDegrees}deg)`;
}

function getClockMinute() {
	let minutesToDegrees = (new Date().getMinutes()) * 6;
  document.getElementById("minute_hand").style.transform = `rotate(${minutesToDegrees}deg)`;
}

function getClockSeconds() {
  let secondsToDegrees = (new Date().getSeconds()) * 6;
  document.getElementById("second_hand").style.transform = `rotate(${secondsToDegrees}deg)`;
}

setInterval(() => getClockSeconds(), 1000) 
setInterval(() => getClockMinute(), 60000)
setInterval(() => getClockHour(), 36000000)

getClockHour();
getClockMinute();
getClockSeconds();