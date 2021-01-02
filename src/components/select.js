import { createTag } from '../lib/create-tag';
import { appendChildren } from '../lib/utils';
import { convertion } from '../store';
import { getExchangeRates } from '../api/get-exchange-rates';

export const Select = () => {
    const element = createTag('select');
    const convertionProxy = new Proxy(convertion, {
        set: function (obj, prop, value) {
            appendChildren(element, value.map(item => createTag(
                'option',
                item,
                [],
                {
                    value: item
                },
                item
            )));
            obj[prop] = value;
            return value;
        }
    });

    getExchangeRates(convertionProxy);

    return element;
};
