import { readFile } from "../utils/readfile.js";
import { writeFile } from "../utils/writefile.js";

const changePassword = async (userDetails, FILE) => {
    const { email, password } = userDetails;

    if (!email || !password) {
        return { message: "all field is required" };
    }

    const users = await readFile(FILE);
    if (users.length === 0) {
        return { message: "user is not register" };
    }

    const existingUser = users.filter((u) => u.email === email);
    if (existingUser.length === 0) {
        return { message: "user is not register" };
    }

    const updatedUsers = users.map((u) => {
        if (u.email === email) {
            return { ...u, password };
        }
        return u;
    });

    await writeFile(FILE, updatedUsers);
    return { message: "password change successfully" };
};

export { changePassword };

