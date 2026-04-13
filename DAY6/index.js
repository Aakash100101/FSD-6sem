import http from "http";
import { userLogin } from "../DAY5/controller/login.js";
import { userRegistration } from "../DAY5/controller/register.js";
import { changePassword } from "../DAY5/controller/changePassword.js";
import { deleteUser } from "../DAY5/controller/deleteUser.js";

const PORT = 5500;

const server = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return;

    if (req.url === "/login" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", async () => {

            const userData = JSON.parse(body);
            const response = await userLogin(userData, "./users.json");

            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        });

    } 

    else if (req.url === "/register" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", async () => {

            const userData = JSON.parse(body);
            const response = await userRegistration(userData, "./users.json");

            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        });

    } 

    else if (req.url === "/change-password" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", async () => {

            const userData = JSON.parse(body);
            const response = await changePassword(userData, "./users.json");

            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        });

    } 

    else if (req.url === "/delete-user" && req.method === "POST") {

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on("end", async () => {

            const userData = JSON.parse(body);
            const response = await deleteUser(userData, "./users.json");

            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        });

    } 

    else {

        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "url is not matched" }));

    }

});

server.listen(PORT,
    () => console.log(`server is running at http://localhost:${PORT}`));