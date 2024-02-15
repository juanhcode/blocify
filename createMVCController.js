import fs from "fs/promises";
import path from "path";

const createController = async (data) => {
  const httpMethods = data.method;

  const generateControllerContent = () => {
    return httpMethods
      .map((httpMethod) => {
        switch (httpMethod) {
          case "post":
            return `
            // create
            const create${data.name}Controller = (req, res) => {

            };`;
          case "get":
            return `// get
            const get${data.name}Controller = (req, res) => {

            };`;

          case "delete":
            return `
            // delete
            const delete${data.name}Controller = (req, res) => {

            };`;

          case "update":
            return `
            // update
            const update${data.name}Controller = (req, res) => {

            };`;

          case "patch":
            return `
            // update
            const patch${data.name}Controller = (req, res) => {

            };`;
          default:
            return "";
        }
      })
      .join("\n");
  };

  const contentController = generateControllerContent();

  const currentDirectory = process.cwd();
  const srcFolderPath = path.join(currentDirectory, "src");
  const controllersFolderPath = path.join(currentDirectory, "controllers");
  const controllersFolderPath2 = path.join(srcFolderPath, "controllers");
  const controllerFilePath = path.join(
    controllersFolderPath,
    `${data.name}.controller.js`
  );
  const controllerFilePath2 = path.join(
    controllersFolderPath2,
    `${data.name}.controller.js`
  );

  try {
    await fs.access(srcFolderPath);
  } catch (err) {
    console.error("'src' folder does not exist.");

    try {
      await fs.access(controllersFolderPath);
    } catch (err) {
      console.error("'controllers' folder does not exist.");
      return;
    }

    try {
      await fs.writeFile(controllerFilePath, contentController);
      console.log(`Successfully created file: "${controllerFilePath}"`);
      return;
    } catch (err) {
      console.error(`Error writing file ${controllerFilePath}: ${err}`);
    }
  }

  try {
    await fs.access(controllersFolderPath2);
  } catch (err) {
    console.error("'controllers' folder does not exist.");
    return;
  }

  try {
    await fs.writeFile(controllerFilePath2, contentController);
    console.log(`Successfully created file: "${controllerFilePath2}"`);
  } catch (err) {
    console.error(`Error writing file ${controllerFilePath2}: ${err}`);
  }
};

export { createController };
