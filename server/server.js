import express from "express";
import * as path from "path";

const app = express()

app.use((req, res, next) =>{
    if(req.method === "GET" && !req.path.startsWith("/api")){
        return res.sendFile(path.resolve("../client/dist/" + req.path));
    } else {
        next()
    }
});

app.get("/api/login", (req, res) =>{
   res.json({
       username: "admin",
       password: "secret"
   })
});

app.use(express.static("../client/dist"))

const server = app.listen(process.env.PORT || 3000, () => {console.log(`started server on http://localhost:${server.address().port}`);});