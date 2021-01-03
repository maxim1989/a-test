import { createTag } from './lib/create-tag';
import { Input } from './components/input';
import { Select } from './components/select';

import './index.css';

export const Main = function (config) {
    return this.render(config);
}

Main.counter = 0;

Main.prototype.elementCreated = function () {
    Main.counter++;
};

Main.prototype.render = function (config) {
    const element = createTag(config);

    this.element = element;
    this.elementCreated(element);

    return element;
};

document.getElementById('root').appendChild(new Main({
    tagName: 'div',
    content: [
        new Input({
            tagName: 'input',
            content: [],
            attrs: {
                type: 'number',
                name: 'currencyAmout',
                min: '0'
            }
        }),
        new Select({ tagName: 'select' })
    ],
    className: ['wrapper']
}));
