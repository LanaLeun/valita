const currency = document.getElementById('currency');
const firstInput = document.getElementById('firstInput');
const firstError = document.getElementById('firstError');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const first = firstInput.value

    let hasError = false;

    if (first === '' || isNaN(Number(first))) {
        firstInput.classList.add('error');
        firstError.textContent = "Введите сумму от 0";
        firstError.style.color = "red"
        hasError = true;
    }
    if (hasError) return
    
    if (fromCurrency==="RUB" && toCurrency==="USD"){
        result.innerHTML = Number(first) * 0.012
    } else if (fromCurrency==="RUB" && toCurrency==="EUR"){
        result.innerHTML = Number(first) * 0.011
    } else if (fromCurrency==="RUB" && toCurrency==="KZT"){
        result.innerHTML = Number(first) * 5.4
    } else if (fromCurrency==="RUB" && toCurrency==="RUB"){
        result.innerHTML = Number(first) / 1
    } 
    else if (fromCurrency==="USD" && toCurrency==="USD"){
        result.innerHTML = Number(first) / 1
    } else if (fromCurrency==="USD" && toCurrency==="KZT"){
        result.innerHTML = Number(first) * 448
    } else if (fromCurrency==="USD" && toCurrency==="RUB"){
        result.innerHTML = Number(first) * 90
    } else if (fromCurrency==="USD" && toCurrency==="EUR"){
        result.innerHTML = Number(first) * 0.89
    }
    else if (fromCurrency==="EUR" && toCurrency==="EUR"){
        result.innerHTML = Number(first) / 1
    } else if (fromCurrency==="EUR" && toCurrency==="KZT"){
        result.innerHTML = Number(first) * 504
    } else if (fromCurrency==="EUR" && toCurrency==="RUB"){
        result.innerHTML = Number(first) * 92
    } else if (fromCurrency==="EUR" && toCurrency==="USD"){
        result.innerHTML = Number(first) * 1.12
    }
    else if (fromCurrency==="KZT" && toCurrency==="KZT"){
        result.innerHTML = Number(first) / 1
    } else if (fromCurrency==="KZT" && toCurrency==="EUR"){
        result.innerHTML = Number(first) * 0.002
    } else if (fromCurrency==="KZT" && toCurrency==="RUB"){
        result.innerHTML = Number(first) * 0.19
    } else if (fromCurrency==="KZT" && toCurrency==="USD"){
        result.innerHTML = Number(first) * 0.00224
    }
}); 
