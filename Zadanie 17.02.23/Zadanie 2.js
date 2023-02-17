const element = document.querySelector("#button");
element.addEventListener("click", function (){
    document.querySelector("#z1").innerHTML= "<i>Świetnie</i>";
});
console.log(element);

const element2 = document.querySelector("#button2");
element2.addEventListener("click",function () {
    document.querySelector("h5").innerText = "<i>Świetnie</i>";
});
console.log(element2)

