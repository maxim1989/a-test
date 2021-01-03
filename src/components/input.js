import { createTag } from '../lib/create-tag';
import { rates, state } from '../store';

const handleOnChange = (event) => {
    state.value = event.target.value;
    console.log('>>> value', event.target.value);
    console.log('>>> response', rates.response);
    console.log('>>> state', state);
};

export const Input = function (config) {
    return this.render(config);
}

Input.counter = 0;

Input.prototype.elementCreated = function () {
    Input.counter++;
};

Input.prototype.onChange = function(element) {
    element.addEventListener('change', handleOnChange);
};

Input.prototype.render = function (config) {
    const element = createTag(config);

    this.element = element;
    this.elementCreated(element);
    this.onChange(element);

    return element;
};