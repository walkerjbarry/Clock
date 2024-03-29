/*Build a clock using JS
Steps:
Create an element with a counter display

Use (element.setInterval() * 1000) to update the element every 1000 milliseconds (1 second)

built in methods for the clock object will assist with hrs, minutes, seconds.

differentiate between AM, PM
*/

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    //this adds a 0 in front of any hrs (or minutes seconds) that are less than 10.  8:00, for example, will display as 08:00:00//
    hrs = hrs < 10 ? "0" + hrs : hrs; 
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000); //this updates the clock every second, to keep it "running"//
};

clock();
