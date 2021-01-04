import { rates, state } from '../store';

export const calculate = () => {
    const [from, to] = state.selected.split(' => ');

    if (from !== rates.response.base && !rates.response.rates[from]) {
        return `"from=${from}" not found`;
    } else if (to !== rates.response.base && !rates.response.rates[to]) {
        return `"to=${to} not found`;
    } else if (!state.value) {
        return `"value=${state.value}" is not a number`
    }

    const baseCurrencyValue = 1;
    const fromValue = rates.response.rates[from] || baseCurrencyValue;
    const toValue = rates.response.rates[to] || baseCurrencyValue;
    const digitsAfterDot = [state.value.toString(), fromValue.toString(), toValue.toString()]
        .map((number) => number.split('.')[1] || '')
        .map(str => str.length)
        .reduce((acc, cur) => acc < cur ? cur : acc, 0);
    const result = (state.value * toValue) / fromValue;

    return result.toFixed(digitsAfterDot).toString();
};
