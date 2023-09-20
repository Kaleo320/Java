var tekst = document.getElementsByClassName('heh')[0].innerText;
var plus = document.getElementById('planszofe');
plus.addEventListener('click',function (){
    alert(tekst.substring(9,19));
});
var minus = document.getElementById('gry');
minus.addEventListener('click', function (){
    alert(tekst.substring(27, ));
});
