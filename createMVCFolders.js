import path from "path";
import fs from "fs/promises";
import { createRoute } from "./createMVCRoutes.js";

const folderNames = ["controllers", "services", "routes"];

const createFolder = async () => {
    const currentDirectory = process.cwd();
    const srcFolderPath = path.join(currentDirectory, "src");

    console.log("srcFolderPath:", srcFolderPath);

    try {
        await fs.access(srcFolderPath);
    } catch (err) {
        console.log("'src' folder does not exist. Creating folders in the current directory.");

        await Promise.all(
            folderNames.map(async (folder) => {
                const folderPath = path.join(currentDirectory, folder);

                try {
                    await fs.mkdir(folderPath);
                    console.log("Folder was created at: ", folderPath);
                } catch (err) {
                    console.error("Could not create folder: ", err);
                }
            })
        );

        // Invocar la función createRoute después de crear las carpetas
        await createRoute();
        return;
    }

    await Promise.all(
        folderNames.map(async (folder) => {
            const folderPath = path.join(srcFolderPath, folder);

            try {
                await fs.mkdir(folderPath);
                console.log("Folder was created at: ", folderPath);
            } catch (err) {
                console.error("Could not create folder: ", err);
            }
        })
    );

    // Invocar la función createRoute después de crear las carpetas
    await createRoute();
};

export { createFolder };
