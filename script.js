let tab=[];
let list = document.querySelector("#list");

for(var i=0; i<5; i++)
{
tab[i] = prompt("Podaj zainteresowanie: ");
list.innerHTML += "<li>" + tab[i] + "</li>";
}

let dodaj = document.querySelector("#dodaj");
dodaj.addEventListener("click", click);
function click()
{
    let input = document.querySelector("#input");
    let opinia = document.querySelector("#opinia");
    opinia.innerHTML = input.value;
    opinia.style.color = "green";
    opinia.style.fontWeight = "bold";
}
