#!/usr/bin/env node
import select from '@inquirer/select';
import {form,generateArchitecture} from './generateArchitecture.js';
import { createFolder } from './createMVCFolders.js';

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
        await form();
        await createFolder();
        break;
    default:
        break;
}

