import express from "express"
import { buscar, buscarPorId, criar, deletar, editar } from "../controllers/concorrenteController.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/concorrentes/');
    },
    filename: function (req, file, cb) {
        const extensaoArquivo = path.extname(file.originalname);
        const nomeArquivo = `${Date.now()}${extensaoArquivo}`;
        cb(null, nomeArquivo);
    }
});
const upload = multer({ storage });
const router = express.Router()

router.get("/", async (req, res) => {
    res.json(await buscar())
})

router.get("/:id", async (req, res) => {
    res.json(await buscarPorId(req.params.id))
})

router.post("/", upload.single("foto"), async (req, res) => {
    let dados = req.body;
   
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/concorrentes/${req.file.filename}`
    }
    res.json(await criar(req.body))
})

router.post("/:id", upload.single("foto"), async (req, res) => {
    let dados = req.body;
   dados.id = Number(dados.id)
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/concorrentes/${req.file.filename}`
    }
    res.json(await editar(dados))
})

router.delete("/:id", async (req, res) => {
    res.json(await deletar(req.params.id))
})
export default router