import express from "express";

import "./database"

const app = express();

app.get("/", (request, response) => {
    return response.json(
        {
            message: "Hello world!"
        }
    );
});

app.post("/", (request, response) => {
    return response.json(
        {
            message: "Hello, this is a POST request!"
        }
    );
});

app.listen(5000, () => console.log("Server is running on port 5000"));