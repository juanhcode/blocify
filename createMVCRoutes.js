import fs from "fs/promises";
import path from "path";

const contentRoute = `// Hola, soy la monda parada`;

const createRoute = async (data) => {

  const name = data?.name;
  const currentDirectory = process.cwd();
  const srcFolderPath = path.join(currentDirectory, "src");
  const routesFolderPath = path.join(currentDirectory, "routes");
  const routesFolderPath2 = path.join(srcFolderPath, "routes");
  const v1FolderPath = path.join(routesFolderPath, "v1");
  const v1FolderPath2 = path.join(routesFolderPath2, "v1");
  const routeFilePath = path.join(v1FolderPath, `${name}.route.js`);
  const routeFilePath2 = path.join(v1FolderPath2, `${name}.route.js`);

  try {
    await fs.access(srcFolderPath);
  } catch (err) {
    console.error(
      "'src' folder does not exist."
    );

    try {
      await fs.access(routesFolderPath);
    } catch (err) {
      console.error(
        "'routes' folder does not exist. Please create the 'routes' folder first."
      );
      return;
    }

    try {
      await fs.access(v1FolderPath);
    } catch (err) {
      console.log("Creating 'v1' folder...");
      try {
        await fs.mkdir(v1FolderPath,);
        console.log(`Successfully created folder: "${v1FolderPath}"`);
      } catch (err) {
        console.error(`Error creating folder ${v1FolderPath}: ${err}`);
        return;
      }
    }

    try {
      await fs.writeFile(routeFilePath, contentRoute);
      console.log(`Successfully created file: "${routeFilePath}"`);
    } catch (err) {
      console.error(`Error writing file ${routeFilePath}: ${err}`);
    }
  }

  try {
    await fs.access(routesFolderPath2);
  } catch (err) {
    console.error(
      "'routes' folder does not exist. "
    );
    return;
  }

  try {
    await fs.access(v1FolderPath2);
  } catch (err) {
    console.log("Creating 'v1' folder...");
    try {
      await fs.mkdir(v1FolderPath2,);
      console.log(`Successfully created folder: "${v1FolderPath2}"`);
    } catch (err) {
      console.error(`Error creating folder ${v1FolderPath2}: ${err}`);
      return;
    }
  }

  try {
    await fs.writeFile(routeFilePath2, contentRoute);
    console.log(`Successfully created file: "${routeFilePath2}"`);
  } catch (err) {
    console.error(`Error writing file ${routeFilePath2}: ${err}`);
  }
};

export { createRoute };
