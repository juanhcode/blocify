#!/usr/bin/env node
import select from '@inquirer/select';
import { form, generateArchitecture } from './generateArchitecture.js';

const menu = async () => {
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
    return answer;
}
const number = await menu();
switch (number) {
    case 1:
        const option = await generateArchitecture();
        switch (option) {
            case 1:
                await form();
                break;
            case 4:
                await menu();
                break;
            default:
                break;
        }
        break;
    default:
        break;
}

