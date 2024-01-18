import select from '@inquirer/select';
export default async function generateArchitecture() {
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
