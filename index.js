import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(5000, () => {
    console.log(chalk.green("estou rodando!"));
});