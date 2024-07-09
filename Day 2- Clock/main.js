const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');    // get the min-hand class   
const hourHand = document.querySelector('.hour-hand');   // get the hour-hand class
function setDate(){
    // console.log('Hello');
    const now = new Date();// get the current date and time
    const seconds = now.getSeconds();// 0-59        // getSeconds() is a method of Date object  // getMinutes() is a method of Date object  // getHours() is a method of Date object
    const secondsDegrees = ((seconds / 60) * 360+90);       // 90 is added to make the clock start from 12
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();// 0-59
    const minsDegrees = ((mins / 60) * 360+90);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();// 0-23
    const hourDegrees = ((hour / 12) * 360+90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // console.log(mins);

    console.log(seconds);
}
setDate()
setInterval(setDate, 1000); // 1000ms = 1s