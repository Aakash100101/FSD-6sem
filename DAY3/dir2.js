import fs from "fs";
const readDirSync = (dir) => {
    try {
        const dirData = fs.readdirSync(dir);
        console.log(dirData);
    } catch (error) {
        console.log("unable to read dir");
    }
}
// readDirSync("../day_01");
const makeDirSync = (dir) => {
    try {
        fs.mkdirSync(dir);
        console.log("Directory has been created successfully.");
    } catch (error) {
        console.log("unable to make directory.");
    }
}
// makeDirSync("../day_04");
const removeDirSync = (dir) => {
    try {
        fs.rmdirSync(dir);
        console.log("Directory has been removed successfully");       
    } catch (error) {
       console.log("unable to remove dir");      
    }
}
removeDirSync("../day_04")