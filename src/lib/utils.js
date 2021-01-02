export const addCls = (element, list = []) => {
    const cls = new Set(list)

    cls.forEach((value) => {
        element.className += " " + value;
    });

    return element;
};

export const addAttrs = (element, attrs = {}, info = {}) => {
    const keys = Object.keys(attrs);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = attrs[key];

        if (info[key]) {
            if (typeof info[key] === 'string') {
                element.setAttribute(key, attrs[key]);
            } else if (info[key][value]) {
                element.setAttribute(key, value);
            } else {
                throw Error(`Attribute "${key}" value "${value}" not supported`)
            }
        } else {
            throw Error(`Attribute ${key} not supported`);
        }
    }

    return element;
};

export const appendChildren = (element, content) => {
    if (content && typeof content === 'string') {
        element.innerHTML = content;
    } else if (content && Array.isArray(content)) {
        for (let i = 0; i < content.length; i++) {
            try {
                element.appendChild(content[i]);
            } catch {
                throw Error(`"${content[i]}" is not an HTML element`);
            }
        }
    }

    return element;
};