//Время

const mouth = document.querySelector('#mouth');
const week_day = document.querySelector('#week-day');
const number = document.querySelector('#numb');
const th = document.querySelector('#th');


let dateM = new Date().getMonth() + 1;
let dateW = new Date().getDay();
let dateN = new Date().getDate();

let m = "JU";
let w = "Monday";
let t = "th";

setInterval(()=>{
    dateM = new Date().getMonth() + 1;
    dateW = new Date().getDay();
    dateN = new Date().getDate();

    if(dateN == 1 || dateN == 21 || dateN == 31) t = "st";
    if(dateN == 2 || dateN == 22) t = 'nd';
    if(dateN == 3 || dateN == 23) t = "rd";
    if(dateN != 1 && dateN != 2 && dateN != 3 && dateN != 21 && dateN != 22 && dateN != 23 && dateN != 31) t = "th"
},10)

switch(dateM) {
    case 1: m = "JU"; break;
    case 2: m = "FE"; break;
    case 3: m = "MCH"; break;
    case 4: m = "APR"; break;
    case 5: m = "MAY"; break;
    case 6: m = "JUN"; break;
    case 7: m = "JUL"; break;
    case 8: m = "AUG"; break;
    case 9: m = "SEP"; break;
    case 10: m = "OCT"; break;
    case 11: m = "NOV"; break;
    case 12: m = "DEC"; break;
}
switch(dateW) {
    case 1: w = "Monday"; break;
    case 2: w = "Tuesday"; break;
    case 3: w = "Wednesday"; break;
    case 4: w= "Thursday"; break;
    case 5: w = "Friday"; break;
    case 6: w = "Saturday"; break;
    case 7: w = "Sunday"; break;
}
setInterval(()=>{
    mouth.innerHTML = m;
    week_day.innerHTML = w;
    number.innerHTML = dateN;
    th.innerHTML = t;
},100);

document.querySelector('#phone').addEventListener('click', () => {
    open('tel:89045369413')
})
document.querySelector('#reg').addEventListener('click', () => {
    document.location.href = 'reg.html'
})
setInterval(()=>{
    if(window.innerWidth >= 617) {
        document.querySelector('dialog').close();
        document.querySelector('#heshs').style.cssText = `display: inline-block`;
        document.querySelector('#catalog').style.cssText = `display: none`
    }
    if(window.innerWidth <= 616) {
        document.querySelector('#logo').style.cssText = `margin-top: -10px`
        document.querySelector('#heshs').style.cssText = `display: none`;
        document.querySelector('#catalog').style.cssText = `display: flex`
    }
},10)
document.querySelector('#catalog').addEventListener('click', () => {
    document.querySelector('dialog').show()
})
document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('dialog').close()
})