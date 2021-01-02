import { createTag } from './lib/create-tag';

import './index.css';

const Main = () => {

    return createTag(
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
            createTag(
                'select',
                [
                    createTag(
                        'option',
                        'CAD => CHF',
                        [],
                        {
                            value: 'CAD => CHF'
                        }
                    )
                ]
            )
        ],
        ['wrapper']
    );
}

document.getElementById('root').appendChild(Main());
