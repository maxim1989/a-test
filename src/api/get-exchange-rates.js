import { rates } from '../store';

export const getExchangeRates = (convertionProxy) => {
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://api.exchangeratesapi.io/latest');
    // xhr.send();
    // xhr.onload = function () {
    //     if (xhr.status != 200) {
    //         console.info(`Error ${xhr.status}: ${xhr.statusText}`);
    //     } else {
    //         console.log('Success', xhr.response);
    //         rates.response = JSON.parse(xhr.response);
    //         alert(`Готово, получили ${xhr.response.length} байт`);
    //     }
    // };
    // xhr.onerror = function () {
    //     console.error('Request error');
    // };

    rates.response = { "rates": { "CAD": 1.5633, "HKD": 9.5142, "ISK": 156.1, "PHP": 59.125, "DKK": 7.4409, "HUF": 363.89, "CZK": 26.242, "AUD": 1.5896, "RON": 4.8683, "SEK": 10.0343, "IDR": 17240.76, "INR": 89.6605, "BRL": 6.3735, "RUB": 91.4671, "HRK": 7.5519, "JPY": 126.49, "THB": 36.727, "CHF": 1.0802, "SGD": 1.6218, "PLN": 4.5597, "BGN": 1.9558, "TRY": 9.1131, "CNY": 8.0225, "NOK": 10.4703, "NZD": 1.6984, "ZAR": 18.0219, "USD": 1.2271, "MXN": 24.416, "ILS": 3.9447, "GBP": 0.89903, "KRW": 1336.0, "MYR": 4.934 }, "base": "EUR", "date": "2020-12-31" };

    const keys = Object.keys(rates.response.rates);
    const data = [];

    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            data.push(`${keys[i]} => ${keys[j]}`);
        }
    }

    convertionProxy.data = data;
};
