import { createTag } from '../lib/create-tag';
import { appendChildren } from '../lib/utils';
import { convertion } from '../store';
import { getExchangeRates } from '../api/get-exchange-rates';

export const Select = function() {
    return this.render();
}

Select.counter = 0;

Select.prototype.watcherConversion = function(element, data) {
    element.innerHTML = '';
    appendChildren(element, data.map(item => createTag(
        'option',
        item,
        [],
        {
            value: item
        },
        item
    )));
}

Select.prototype.elementCreated = function(element) {
    Select.counter++;

    const elementId = Select.counter;

    convertion.watchers = { [`Select-${elementId}`]: (data) => this.watcherConversion(element, data) }
    getExchangeRates();
};

Select.prototype.render = function() {
    const element = createTag('select');

    this.element = element;
    this.elementCreated(element);

    return element;
};
