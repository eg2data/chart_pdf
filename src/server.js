// 1. create app
import express from "express";
import morgan from "morgan";
import tempRouter from "./routers/tempRouter";

const PORT = 4000;
const app = express();

console.log(process.cwd());

const logger = morgan("dev");

// 2. configure app
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use("/", tempRouter);


// 3. open app to the outside
app.listen(PORT, ()=>console.log(`Server is listening on port http://localhost:${PORT}`));


















