import { calculate } from '../lib/math';
import { createTag } from '../lib/create-tag';
import { appendChildren } from '../lib/utils';
import { convertion, state } from '../store';
import { getExchangeRates } from '../api/get-exchange-rates';

const handleOnChange = (event) => {
    console.log('>>> !!! value', event.target.value);
    state.selected = event.target.value;

    const result = calculate();

    console.log('>>> result from select', result)
};

export const Select = function(config) {
    return this.render(config);
};

Select.counter = 0;

Select.prototype.watcherConversion = function(element, data) {
    element.innerHTML = '';
    state.selected = data[0];
    appendChildren(element, data.map(item => createTag({
        tagName: 'option',
        content: item,
        attrs: {
            value: item
        }
    })));
}

Select.prototype.onChange = function(element) {
    element.addEventListener('change', handleOnChange);
};

Select.prototype.elementCreated = function(element) {
    Select.counter++;

    const elementId = Select.counter;

    convertion.watchers = { [`Select-${elementId}`]: (data) => this.watcherConversion(element, data) }
    getExchangeRates();
};

Select.prototype.render = function(config) {
    const element = createTag(config);

    this.element = element;
    this.elementCreated(element);
    this.onChange(element);

    return element;
};
