import express from "express"
import cors from "cors"
import concorrenteRoutes from "./src/routes/concorrenteRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola mundo");
})
app.use("/concorrentes", concorrenteRoutes)

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
    
})