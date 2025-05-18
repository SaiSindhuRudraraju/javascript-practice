const mybutton = document.getElementById("mybutton");
const mylable1 = document.getElementById("mylable1");
const mylable2 = document.getElementById("mylable2");
const mylable3 = document.getElementById("mylable3");

const min = 1;
const max = 6;

mybutton.onclick = function(){   
    mylable1.textContent = Math.floor(Math.random() * (max)) + min;
    mylable2.textContent = Math.floor(Math.random() * (max)) + min;
    mylable3.textContent = Math.floor(Math.random() * (max)) + min;
}

const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const mysubmpaymentResultit = document.getElementById("paymentResult");

mysubmit.onclick = function(){
    if(mycheckbox.checked)
    {
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked)
    {
        mysubmpaymentResultit.textContent = `You are paying with visa`;
    }
    else if(mastercardBtn.checked)
    {
        mysubmpaymentResultit.textContent = `You are paying with master card`;
    }
    else if(paypalBtn.checked)
    {
        mysubmpaymentResultit.textContent = `You are paying with paypal`;
    }
    else{
        mysubmpaymentResultit.textContent = `You must select a payment type`;
    }
}