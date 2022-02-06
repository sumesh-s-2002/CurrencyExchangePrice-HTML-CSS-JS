const exchangeOne = document.getElementById("country-1");
const exchangeTwo = document.getElementById("country-2");
const rateOne = document.getElementById("rate-1");
const rateTwo = document.getElementById("rate-2");
const swapButton = document.querySelector(".button");
const result = document.querySelector(".result");
const apiKey = "a8c4109db169b1998e10e183";

//adding eventListners
exchangeOne.addEventListener("change", calculate);
exchangeTwo.addEventListener("change", calculate);
rateOne.addEventListener("input", calculate);
rateTwo.addEventListener("input", calculate);

//calculate :- fetch and update the values in UI
function calculate(){
    let exchangeOne = document.getElementById("country-1").value;
    console.log(exchangeOne)
    let exchangeTwo = document.getElementById("country-2").value;
    let rate = +document.querySelector("#rate-1").value;
    fetch(` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${exchangeOne}`)
    .then(res => res.json())
    .then(dta =>{
        let value = dta.conversion_rates[exchangeTwo]
        result.textContent = `${rate} ${exchangeOne} = ${(value*rate)} ${exchangeTwo}`;
        rateTwo.value = value*rate;

    })

}
//swap swapButton
swapButton.addEventListener("click", ()=>{
    let temp = rateOne.value;
    rateOne.value = rateTwo.value;
    rateTwo.value = temp;
    calculate();
})