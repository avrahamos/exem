import express, { Express } from "express";
import "dotenv/config";
import v4 from "uuid";

const app: Express = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`See you at http::localhost:${process.env.PORT}`);
});
console.log(process.env.PORT);
