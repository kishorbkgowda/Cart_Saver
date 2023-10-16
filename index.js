const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const ul = document.getElementById("list");
let lol = [];

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    lol.push(inputValue);
    inputFieldEl.value = "";
    print();
    console.log(`${inputValue} `);
})


function print()
{
 let hype = ' ';

 for (let index = 0; index < lol.length; index++) 
 {

    const html = `<li> ${lol[index]} <button onclick ="
    lol.splice(${index},1)
    print();" class = "btn1" ><img class ="src1" src="cross.png" alt=""></button> </li>`;

    hype = hype  + html;
 }

 ul.innerHTML = hype;


}


