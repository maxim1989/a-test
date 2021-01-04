import {
    convertion,
    rates
} from '../store';

const calcConvertCombinations = (data) => {
    const keys = [...Object.keys(data.rates), data.base];
    const store = [];

    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (i !== j) {
                store.push(`${keys[i]} => ${keys[j]}`);
            }
        }
    }

    convertion.data = store;
}

export const getExchangeRates = () => {
    const data = localStorage.getItem('data');
    const last = localStorage.getItem('last');
    const now = Date.now();
    const minutes = new Date(now - last).getMinutes();

    if (data && minutes < 60) {
        const resp = JSON.parse(data);

        rates.response = resp;
        calcConvertCombinations(resp);
    } else {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.exchangeratesapi.io/latest');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.info(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                console.log('Success', xhr.response);
                const resp = JSON.parse(xhr.response);

                rates.response = resp;
                localStorage.setItem('data', xhr.response);
                localStorage.setItem('last', Date.now());
                calcConvertCombinations(resp);
            }
        };
        xhr.onerror = function () {
            console.error('Request error');
        };
    }
};
