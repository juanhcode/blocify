import select from '@inquirer/select';
import input from '@inquirer/input';
import { createFolder } from './createMVCFolders.js';
import checkbox, { Separator } from '@inquirer/checkbox';
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

const chooseHttp = async () => {
    const answer = await checkbox({
        message: 'Choose the HTTP method',
        required: true,
        choices: [
            { name: 'GET', value: 'get' },
            { name: 'POST', value: 'post' },
            { name: 'DELETE', value: 'delete' },
            { name: 'PUT', value: 'put' },
            { name: 'PATCH', value: 'patch' },
        ],
    });
    return answer;

}
const chooseType = async () => {
    const answer = await select({
        message: 'Choose your project settings',
        choices: [
            {
                name: 'module',
                value: 'module',
            },
            {
                name: 'commonjs',
                value: 'commonjs',
            },
        ],
    });
    return answer;

}

async function form() {
    const type = await chooseType();
    const name = await createQuestion('Name: ');
    const path = await createQuestion('Path: ');
    const verbHttp = await chooseHttp();
    const data = {
        type,
        name,
        path,
        method: verbHttp
    }
    createFolder(data);
}


const createQuestion = async (message) => {
    const answer = await input({ message: message });
    return answer
}

export { generateArchitecture, form }