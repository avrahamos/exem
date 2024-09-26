import express, { Express } from "express";
import "dotenv/config";
import v4 from "uuid";
import beeperController from "./controllers/beeprController";
const app: Express = express();

app.use(express.json());
app.use("/api", beeperController);

app.listen(process.env.PORT, () => {
  console.log(`See you at http::localhost:${process.env.PORT}`);
});
