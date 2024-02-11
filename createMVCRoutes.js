import fs from "fs/promises";
import path from "path";

const contentRoute = `// Hola, soy la monda parada`;

const createRoute = async (data) => {
  const currentDirectory = process.cwd();
  const srcFolderPath = path.join(currentDirectory, "src");
  const routesFolderPath = path.join(currentDirectory, "routes");
  const routesFolderPath2 = path.join(srcFolderPath, "routes");
  const routeFilePath = path.join(routesFolderPath, `${data?.name}.route.js`);
  const routeFilePath2 = path.join(routesFolderPath2, `${data?.name}.route.js`);

  console.log("routesFolderPath:", routesFolderPath);
  console.log("routeFilePath:", routeFilePath);

  try {
    await fs.access(srcFolderPath);
  } catch (err) {
    console.error(
        "'src' folder does not exist. Please create the 'src' folder first."
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
      "'routes' folder does not exist. Please create the 'routes' folder first."
    );
    return;
  }

  try {
    await fs.writeFile(routeFilePath2, contentRoute);
    console.log(`Successfully created file: "${routeFilePath2}"`);
  } catch (err) {
    console.error(`Error writing file ${routeFilePath2}: ${err}`);
  }
};

export { createRoute };
