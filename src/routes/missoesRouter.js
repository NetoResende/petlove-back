import express from "express"
import { buscar, buscarPorId, coletar, criar, deletar } from "../controllers/missaoController.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/missoes/');
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
    // #swagger.tags = ['Missoes']
    // #swagger.description = 'Endpoint para buscar todas as missões.'
    /* #swagger.responses[200] = { 
        description: 'Lista de missões encontrada com sucesso.',
        schema: [{
            id: 1,
            concorrente_id: 1,
            status: "Ativo",
            usuario_id: 1,
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z",
            concorrentes: {
                id: 1,
                nome: "Petz",
                tipo: "Petshop",
                endereco: "Rua Exemplo, 123",
                foto: "http://localhost:8000/uploads/concorrentes/foto.jpg",
                createdAt: "2023-10-27T10:00:00.000Z",
                updatedAt: "2023-10-27T10:00:00.000Z"
            },
            missao_produto: [{
                id: 1,
                missao_id: 1,
                produto_id: 1,
                preco: 10.50,
                observacoes: "Obs",
                status: "Disponivel",
                createdAt: "2023-10-27T10:00:00.000Z",
                updatedAt: "2023-10-27T10:00:00.000Z"
            }]
        }]
    } */
    res.json(await buscar())
})

router.get("/:id", async (req, res) => {
    // #swagger.tags = ['Missoes']
    // #swagger.description = 'Endpoint para buscar uma missão pelo ID.'
    /* #swagger.responses[200] = { 
        description: 'Missão encontrada com sucesso.',
        schema: {
            id: 1,
            concorrente_id: 1,
            status: "Ativo",
            usuario_id: 1,
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z",
            concorrentes: {
                id: 1,
                nome: "Petz",
                tipo: "Petshop",
                endereco: "Rua Exemplo, 123",
                foto: "http://localhost:8000/uploads/concorrentes/foto.jpg",
                createdAt: "2023-10-27T10:00:00.000Z",
                updatedAt: "2023-10-27T10:00:00.000Z"
            },
            missao_produto: [{
                id: 1,
                missao_id: 1,
                produto_id: 1,
                preco: 10.50,
                observacoes: "Obs",
                status: "Disponivel",
                createdAt: "2023-10-27T10:00:00.000Z",
                updatedAt: "2023-10-27T10:00:00.000Z"
            }]
        }
    } */
    res.json(await buscarPorId(req.params.id))
})

router.post("/", upload.single("arquivo"), async (req, res) => {
    /* #swagger.tags = ['Missoes']
       #swagger.description = 'Endpoint para criar uma nova missão via upload de arquivo.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['concorrente_id'] = { in: 'formData', type: 'integer', description: 'ID do concorrente associado.' }
       #swagger.parameters['arquivo'] = {
           in: 'formData',
           type: 'file',
           description: 'Arquivo Excel da missão.'
       } 
       #swagger.responses[200] = { 
           description: 'Missão criada com sucesso.',
           schema: { type: "success", description: "Registro criado com sucesso." }
       }
    */
    res.json(await criar(req, res))
})

router.put("/coleta", async (req, res) => {
    res.json(await coletar(req.body))
})

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Missoes']
    // #swagger.description = 'Endpoint para deletar uma missão pelo ID.'
    /* #swagger.responses[200] = { 
           description: 'Missão deletada com sucesso.',
           schema: { type: "success", description: "Missão deletado com sucesso" }
       } */
    res.json(await deletar(req.params.id))
})
export default router