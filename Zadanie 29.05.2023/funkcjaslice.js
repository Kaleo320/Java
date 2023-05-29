var tekst = document.getElementsByClassName('cut')[0].innerText;
var plus = document.getElementById('tak');
plus.addEventListener('click',function (){
    alert(tekst.slice(26,36));
});
var minus = document.getElementById('nie');
minus.addEventListener('click', function (){
    alert(tekst.slice(-12, -5));
});
