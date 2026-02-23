import { readFile } from "../utils/readfile.js";
const File="../user.json";
const userLogin= async(userDetails)=>{
    const{email,password}=userDetails;
    const users=await readFile(File);
    if(users.length===0){
        console.log("user is the not registration");
        return;
    }
    const user=users.filter((u)=>u.email===email);
    if(user.length==0){
        console.log("Users is not registers");

    }
    user[0].password===password?console.log("login successfull"):
     console.log("login not successfull");
}
userLogin({email:"twisdish0@parallels.com", password:"zX4\\PN*\\(>)fYbl"});