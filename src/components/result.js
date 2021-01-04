import { createTag } from '../lib/create-tag';
import { state } from '../store';

import './result.css';

export const Result = function(config) {
    return this.render(config);
};

Result.counter = 0;

Result.prototype.watcherState = function(element, data) {
    element.innerHTML = data;
}

Result.prototype.elementCreated = function(element) {
    Result.counter++;

    const elementId = Result.counter;

    state.watchers = { [`Result-${elementId}`]: (data) => this.watcherState(element, data) }
};

Result.prototype.render = function(config) {
    const element = createTag(config);

    this.element = element;
    this.elementCreated(element);

    return element;
};
