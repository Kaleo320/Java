const usernumber = prompt('jaka kolwiek liczba');
const spannumber = document.getElementsByClassName('liczba');
document.getElementById('pl').innerText = 'Podana liczba:' +usernumber;
for (const num of spannumber)
{
num.innerText = usernumber;
}
let funkcja1 = Math.abs(usernumber);
let funkcja2 = Math.ceil(usernumber);
let funkcja3 = Math.floor(usernumber);
let funkcja4 = Math.max(usernumber);
let funkcja5 = Math.min(usernumber);
let funkcja6 = Math.pow(usernumber,2);
let funkcja7 = Math.round(usernumber);
let funkcja8 = Math.sqrt(usernumber);
console.log(funkcja1,funkcja2,funkcja3,funkcja4,funkcja5,funkcja6,funkcja7,funkcja8)
document.getElementById("jeden").innerText = funkcja1;
document.getElementById("dwa").innerText = funkcja2;
document.getElementById("trzy").innerText = funkcja3;
document.getElementById("cztery").innerText = funkcja4;
document.getElementById("piec").innerText = funkcja5;
document.getElementById("szesc").innerText = funkcja6;
document.getElementById("siedem").innerText = funkcja7;
document.getElementById("osiem").innerText = funkcja8;
