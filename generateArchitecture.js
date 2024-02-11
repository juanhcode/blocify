import select from '@inquirer/select';
import input from '@inquirer/input';
import { createFolder } from './createMVCFolders.js';
async function generateArchitecture() {
    const menuArchitecture = await select({
        message: 'Choose the architecture',
        choices: [
            {
                name: 'MVC',
                value: 1,
            },
            {
                name: 'Back',
                value: 4,
            },
        ],
    });
    return menuArchitecture;
}


async function form() {
    const name = await createQuestion('Name: ');
    const path = await createQuestion('Path: ');
    const data = {
        name,
        path
    }
    createFolder(data);
}


const createQuestion = async (message)=>{
    const answer = await input({ message: message });
    return answer
}

export {generateArchitecture,form}