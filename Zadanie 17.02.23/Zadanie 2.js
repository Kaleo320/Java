// 1
const jeden = document.querySelector("#button")
jeden.addEventListener('click', function (){
    document.querySelector("#z1").innerHTML = "<i>Świetnie!</i>"
});
console.log(jeden)

// 2
const dwa = document.querySelector("#button2")
dwa.addEventListener('click', function (){
    document.querySelector("#z2").innerText = "<i>Świetnie!</i>"
});
console.log(dwa)

// 3
const trzy = document.querySelector("#button3")
trzy.addEventListener('click', function (){
    const trzy_kontener = document.querySelector("#z3 strong");
    trzy_kontener.style.border='2px dotted red'
    console.log(trzy_kontener)
})
const cztery = document.querySelector("#button4")
cztery.addEventListener('click', function (){
    const cztery_jeden = document.querySelector('#z4')
alert(cztery_jeden.title)
    console.log(cztery_jeden)
})
const piec = document.querySelector("#button5")
piec.addEventListener('click', function (){
    const piec_jeden = document.querySelector('#z5')
    piec_jeden.setAttribute('jeden', 'rlt')
    console.log(piec_jeden)
})
const szesc = document.querySelector('#button6')
szesc.addEventListener('click', function (){
    const szesc_jeden = document.querySelector('#z6')
    if (szesc_jeden.hasAttribute('disabled')) {
        document.getElementById('z6.').disabled = false
        szesc_jeden.innerHTML = 'Można edytować';
    }
    else{

        document.getElementById('z6').disabled = true
        szesc_jeden.innerHTML = 'Nie można edytowa'
    }

    console.log((szesc_jeden))
}
)
//8
 document.querySelector("#tak").addEventListener("click", function () {
    const osiem  = document.querySelector("#dataset-atributes-element");
    console.log(osiem.dataset);
    console.log(osiem.attributes);

    const osiem_kontener = document.querySelector("#dataset-attributes-container");
    for (const attribute of osiem_kontener.attributes) {
        let para = document.createElement("p");
        para.innerHTML = "Atrybut: <b>" + attribute.nodeName
            + "</b> ma wartość:</b>" + attribute.nodeValue + "</b>";
        osiem_kontener.appendChild(para)

    }
})
//9
const dziewiec = document.querySelector('#Button9');
dziewiec.addEventListener('click', function () {
    let kolory = '0123456789ABCDEF';
    let kodkoloru = '#';
    for (let i = 0; i < 6; i++) {
        kodkoloru += kolory[Math.floor(Math.random() * 16)];
    }
    console.log(kodkoloru);
    document.getElementById('' +
        '' +
        'generator').style.backgroundColor = kodkoloru;

});
