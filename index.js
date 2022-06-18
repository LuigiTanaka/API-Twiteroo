import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];
let foto;

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    foto = avatar;
    if (username && avatar) {
        usuarios.push({ username, avatar });
        res.send("OK");
    } else {
        res.send("ERROR");
    }
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    if (username && tweet) {
        tweets.push({ username, avatar: foto, tweet });
        res.send("OK");
    } else {
        res.send("ERROR");
    }
});

app.get("/tweets", (req, res) => {
    const tamanho = tweets.length;
    if (tamanho > 10) {
        res.send(tweets.slice(tamanho-10, tamanho).reverse());
    } else {
        res.send(tweets.reverse());
    }
    
})


app.listen(5000, () => {
    console.log(chalk.bold.green("estou rodando!"));
});