import { createTag } from './lib/create-tag';
import { Input } from './components/input';
import { Select } from './components/select';
import { Result } from './components/result';

import './index.css';

export const Main = function (config) {
    return this.render(config);
}

Main.counter = 0;

Main.prototype.elementCreated = function () {
    Main.counter++;
};

Main.prototype.render = function (config) {
    const element = createTag({
        ...config,
        content: [
            createTag({
                tagName: 'div',
                content: 'Type number and press "ENTER" or use trigget into the field.',
                className: ['instruction']
            }),
            new Input({
                tagName: 'input',
                content: [],
                attrs: {
                    type: 'number',
                    name: 'currencyAmout',
                    min: '0'
                }
            }),
            new Select({ tagName: 'select', className: ['space-left', 'space-bottom'] }),
            new Result({ tagName: 'div' })
        ]
    });

    this.element = element;
    this.elementCreated(element);

    return element;
};

document.getElementById('root').appendChild(new Main({
    tagName: 'div',
    className: ['wrapper']
}));
