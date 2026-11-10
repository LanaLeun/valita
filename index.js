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

    if (first === '' || isNaN(Number(first)) || first === "0") {
        firstInput.classList.add('error');
        firstError.textContent = "Введите сумму от 0";
        firstError.style.color = "red"
        hasError = true;
    } 
    if (hasError) return
    const from = fromCurrency.value
    const to = toCurrency.value

    if (from === "RUB" && to === "USD") {
        result.textContent = `${first}${from}=${(Number(first) * 0.012).toFixed(2)}${to}`
    } else if (from === "RUB" && to === "EUR") {
        result.textContent = `${first}${from}=${(Number(first) * 0.011).toFixed(2)}${to}`
    } else if (from === "RUB" && to === "KZT") {
        result.textContent = `${first}${from}=${(Number(first) * 5.4).toFixed(2)}${to}`
    } else if (from === "RUB" && to === "RUB") {
        result.textContent = `${first}${from}=${(Number(first) / 1).toFixed(2)}${to}`
    }
    else if (from === "USD" && to === "USD") {
        result.textContent = `${first}${from}=${(Number(first) / 1).toFixed(2)}${to}`
    } else if (from === "USD" && to === "KZT") {
        result.textContent = `${first}${from}=${(Number(first) * 448).toFixed(2)}${to}`
    } else if (from === "USD" && to === "RUB") {
        result.textContent = `${first}${from}=${(Number(first) * 90).toFixed(2)}${to}`
    } else if (from === "USD" && to === "EUR") {
        result.textContent = `${first}${from}=${(Number(first) * 0.89).toFixed(2)}${to}`
    }
    else if (from === "EUR" && to === "EUR") {
        result.textContent = `${first}${from}=${(Number(first) / 1).toFixed(2)}${to}`
    } else if (from === "EUR" && to === "KZT") {
        result.textContent = `${first}${from}=${(Number(first) * 504).toFixed(2)}${to}`
    } else if (from === "EUR" && to === "RUB") {
        result.textContent = `${first}${from}=${(Number(first) * 92).toFixed(2)}${to}`
    } else if (from === "EUR" && to === "USD") {
        result.textContent = `${first}${from}=${(Number(first) * 1.12).toFixed(2)}${to}`
    }
    else if (from === "KZT" && to === "KZT") {
        result.textContent = `${first}${from}=${(Number(first) / 1).toFixed(2)}${to}`
    } else if (from === "KZT" && to === "EUR") {
        result.textContent = `${first}${from}=${(Number(first) * 0.002).toFixed(2)}${to}`
    } else if (from === "KZT" && to === "RUB") {
        result.textContent = `${first}${from}=${(Number(first) * 0.19).toFixed(2)}${to}`
    } else if (from === "KZT" && to === "USD") {
        result.textContent = `${first}${from}=${(Number(first) * 0.00224).toFixed(2)}${to}`
    }
}); 
