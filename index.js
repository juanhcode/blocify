#!/usr/bin/env node
import select from '@inquirer/select';
import input from '@inquirer/input';
import generateArchitecture from './generateArchitecture.js';

const answer = await select({
    message: 'Generate modules for',
    choices: [
        {
            name: 'Architecture',
            value: 1,
        },
        {
            name: 'Database',
            value: 2,
        },
        {
            name: 'Documentation',
            value: 3,
        },
        {
            name: 'Exit',
            value: 4,
        },
    ],
});

switch (answer) {
    case 1:
        await generateArchitecture();
        const answer = await input({ message: 'Name: ' });
        const answer2 = await input({ message: 'Path: ' });
        break;
    default:
        break;
}

