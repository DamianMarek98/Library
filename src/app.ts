import express = require("express");
import {hi} from "./controllers/status";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
    res.send(hi(req, res));
});

// export our app
export default app;