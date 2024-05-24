
// cuurency-one, currency-two, amount-one, amount-two, rate ,swap for veriables

const currencyOne = document.getElementById('currency-one');
const currencyTwo= document.getElementById('currency-two');
const amountInputOne = document.getElementById('amountInput-one');
const amountInputTwo = document.getElementById('amountInput-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch currency rates and update the dom
function calculate (){
    const currOne = currencyOne.value;
    console.log(currOne)
    const currTwo = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/5519ac8b9e80c6b73e531223/latest/${currOne}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const rateE = data.conversion_rates[currTwo];
      rate.innerText = `1 ${currOne} = ${rateE} ${currTwo}`;
      amountInputTwo.value = (amountInputOne.value * rateE).toFixed(2);
    });
  
}

currencyOne.addEventListener('change', calculate);

currencyTwo.addEventListener('change', calculate);

amountInputOne.addEventListener('input', calculate);

amountInputTwo.addEventListener('input', calculate);

swap.addEventListener('click', ()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});
 
calculate();