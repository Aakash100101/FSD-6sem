import fs from "fs/promises";
const readDir = async (path) => {
    try {
        const fileData = await fs.readdir(path, "utf-8");
        console.log(fileData);
    } catch (error) {
        console.log("unable to read dir");       
    }
}
readDir("../DAY2");


const removeDir = async (path) => {
    try {
        await fs.rmdir(path);
        console.log("Directory has been removed successfully.");
    } catch (error) {
        console.log("unable to remove dir.");

    }
}
// removeDir("../day_04");
const makeDir = async (path) => {
    try {
        await fs.mkdir(path);
        console.log("directory has been created successfully");
    }
    catch (error) {
        console.log("Unable to create Directory.");
    }
}

// makeDir("../day_05")