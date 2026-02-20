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
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = 'Endpoint para buscar todos os concorrentes.'
    /* #swagger.responses[200] = { 
        description: 'Lista de concorrentes encontrada com sucesso.',
        schema: [{
            id: 1,
            nome: "Petz",
            tipo: "Petshop",
            endereco: "Rua Exemplo, 123",
            foto: "http://localhost:8000/uploads/concorrentes/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }]
    } */
    res.json(await buscar())
})

router.get("/:id", async (req, res) => {
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = 'Endpoint para buscar um concorrente pelo ID.'
    /* #swagger.responses[200] = { 
        description: 'Concorrente encontrado com sucesso.',
        schema: {
            id: 1,
            nome: "Petz",
            tipo: "Petshop",
            endereco: "Rua Exemplo, 123",
            foto: "http://localhost:8000/uploads/concorrentes/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }
    } */
    res.json(await buscarPorId(req.params.id))
})

router.post("/", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Concorrentes']
       #swagger.description = 'Endpoint para criar um novo concorrente.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do concorrente.'
       } 
       #swagger.responses[200] = { 
           description: 'Concorrente criado com sucesso.',
           schema: { type: "success", description: "Concorrente criado com sucesso" }
       }
    */
    let dados = req.body;
   
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/concorrentes/${req.file.filename}`
    }
    res.json(await criar(req.body))
})

router.post("/:id", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Concorrentes']
       #swagger.description = 'Endpoint para editar um concorrente existente.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do concorrente.'
       } 
       #swagger.responses[200] = { 
           description: 'Concorrente editado com sucesso.',
           schema: { type: "success", description: "Concorrente atualizado com sucesso" }
       }
    */
    let dados = req.body;
   dados.id = Number(dados.id)
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/concorrentes/${req.file.filename}`
    }
    res.json(await editar(dados))
})

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = 'Endpoint para deletar um concorrente pelo ID.'
    /* #swagger.responses[200] = { 
           description: 'Concorrente deletado com sucesso.',
           schema: { type: "success", description: "Concorrente deletado com sucesso" }
       } */
    res.json(await deletar(req.params.id))
})
export default router