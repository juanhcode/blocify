import path from "path";
import fs from "fs/promises";

const folderNames = ["controllers", "services", "routes"];

const createFolder = async () => {
  const currentDirectory = process.cwd();

  await Promise.all(
    folderNames.map(async (folders) => {
      const folderPath = path.join(currentDirectory, folders);

      try {
        await fs.mkdir(folderPath);
        console.log("Folder was created in: ", folderPath);
      } catch (err) {
        console.error("Could not create folder: ", err);
      }
    })
  );
};

export { createFolder };
