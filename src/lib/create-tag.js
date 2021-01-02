import { domCache } from './dom';
import {
    addCls,
    addAttrs,
    appendChildren
} from './utils';

const tags = {
    input: {
        attr: {
            type: {
                number: true
            },
            name: 'string'
        }
    },
    select: {
        attr: {}
    },
    option: {
        attr: {
            value: 'string'
        }
    },
    div: {
        attr: {}
    }
};

export const createTag = (tagName, content, className = [], attrs = {}) => {
    const tag = tags[tagName];

    if (!tag) {
        throw Error(`Tag "${tagName}" not supported`);
    }

    let tagElement = document.createElement(tagName);

    tagElement = addCls(tagElement, className);
    tagElement = addAttrs(tagElement, attrs, tags[tagName].attr);
    tagElement = appendChildren(tagElement, content);
    tagElement = appendChildren(tagElement, content);

    return tagElement;
};