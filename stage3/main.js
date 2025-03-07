// console.log("hello world");

// let convertedHours = hours % 12;

// console.log(timeYork);

function updateClock(clockId, hoursDiff) {
    //time for york
    const timeYork = new Date();
    //set up getting correct time for Sydney using js date method
    const x = new Date();
    let hours = x.getHours() + hoursDiff;
    let minutes = x.getMinutes();
    let seconds = x.getSeconds();
    let year = x.getFullYear();
    let month = x.getMonth();
    let currentDate = x.getDate();
    const timeSydney = new Date(year, month, currentDate, hours, minutes, seconds);

    console.log(timeYork);
    console.log(timeSydney);

    const clock = document.getElementById(clockId);
    // clock.getElementsByClassName("hour")[0].style.transform = "translateX(100px) rotate(" + ROTATION + "deg)";
}

updateClock("york", 0);
updateClock("sydney", 11);