import fs from "fs/promises";

const status = async (file) => {
    try {
        const data = await fs.stat(file);
        console.log(data.size);
        console.log(data.isFile());
        console.log(data.isDirectory());
        
    } catch (error) {
        console.log("unable to find status.");
    }
}
status("../DAY2");