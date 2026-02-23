import { readFile } from "../utils/readfile.js";
import { writeFile } from "../utils/writefile.js";
const File = "../user.json";

const register = async(users,userDetails)=>{
    const updatedata=[...users,userDetails];
    const response=await writefile(File,updatedata)
}
const userRegister=async(userDetails)=>{
    const{name,email,password,gender}=userDetails;
    if(!name || !email || !password || !gender){
        console.log("aAll filed is requiere");
        return;
    }
    const users = await readFile(File);
    if(users.length==0){
        register(users,userDetails);
    }
    const existingfuser = users.filter((u) => u.email === email);
    if(existingfuser.length!==0){
        console.log("user is the all ready register");
        return;

    }
    await register(users, userDetails);
}
