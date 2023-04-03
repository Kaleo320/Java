const telef = document.getElementById('1');
const teleo = document.getElementById('2');
const tele = document.getElementById('3');
const checkbox = document.getElementById('tele');
checkbox.addEventListener("change", function (){
    if(checkbox.checked){
        teleo.classList.remove("hide_number");
        telef.classList.remove('hide_number');
        tele.classList.remove('hide_number');
    } else {
        teleo.classList.add("hide_number");
        telef.classList.add("hide_number");
        tele.classList.add("hide_number");
    }
    console.log('Dziennnnki dziaaała')
});