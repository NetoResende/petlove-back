import express from "express"
import cors from "cors"
import concorrenteRoutes from "./src/routes/concorrenteRoutes.js"
import usuariosRoutes from "./src/routes/usuariosRoutes.js"
import produtoRoutes from "./src/routes/produtosRouter.js"
import missoesRoutes from "./src/routes/missoesRouter.js"
import { login } from "./src/controllers/usuarioController.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/docs/swagger_output.json' with { type: 'json' };


const app = express();

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
    res.redirect("/docs");
})
app.post("/login", async (req, res)=> {
    res.json(await login(req.body))
})
app.use("/uploads", express.static("uploads"))
app.use("/concorrentes", concorrenteRoutes)
app.use("/usuarios", usuariosRoutes)
app.use("/produtos", produtoRoutes)
app.use("/missoes",missoesRoutes)
app.use((req, res, next) => {
    res.status(404).send("Página não encontrada")  
    
})

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
})
