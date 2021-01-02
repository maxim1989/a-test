import { createTag } from './lib/create-tag';
import { Select } from './components/select';

import './index.css';

const Main = () => createTag(
    'div',
    [
        createTag(
            'input',
            [],
            null,
            {
                type: 'number',
                name: 'currencyAmout'
            }
        ),
        Select()
    ],
    ['wrapper']
);

document.getElementById('root').appendChild(Main());
