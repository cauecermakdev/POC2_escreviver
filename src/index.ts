import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import escreviverRouter from "./routes/escreviverRouter.js";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();

const app = express();
app.use(json());
app.use(escreviverRouter);
app.use(handleErrorsMiddleware);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})