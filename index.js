import express from "express"
import cors from "cors"
import concorrenteRoutes from "./src/routes/concorrenteRoutes.js"
import usuariosRoutes from "./src/routes/usuariosRoutes.js"
import produtoRoutes from "./src/routes/produtosRouter.js"
import { login } from "./src/controllers/usuarioContrller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola mundo");
})
app.post("/login", async (req, res)=> {
    res.json(await login(req.body))
})
app.use("/uploads", express.static("uploads"))
app.use("/concorrentes", concorrenteRoutes)
app.use("/usuarios", usuariosRoutes)
app.use("/produtos", produtoRoutes)

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
    
})