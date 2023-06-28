import express from "express";
import indexRouter from "routes/routes";

const app = express();
app.use(express.json());
app.use(indexRouter);

const port: number = 5000;
app.listen(port, () => {
    console.log(`Server is up and running or port: ${port}`);
})