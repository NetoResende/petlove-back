import express from "express"
import { buscar, buscarPorId, criar, deletar, editar } from "../controllers/produtoController.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/produtos/');
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
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Endpoint para buscar todos os produtos.'
    /* #swagger.responses[200] = { 
        description: 'Lista de produtos encontrada com sucesso.',
        schema: [{
            id: 1,
            nome: "Nome do Produto",
            preco: 10.50,
            codigo: "COD123",
            foto: "http://localhost:8000/uploads/produtos/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }]
    } */
    res.json(await buscar())
})

router.get("/:id", async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Endpoint para buscar um produto pelo ID.'
    /* #swagger.responses[200] = { 
        description: 'Produto encontrado com sucesso.',
        schema: {
            id: 1,
            nome: "Nome do Produto",
            preco: 10.50,
            codigo: "COD123",
            foto: "http://localhost:8000/uploads/produtos/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }
    } */
    res.json(await buscarPorId(req.params.id))
})

router.post("/", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Produtos']
       #swagger.description = 'Endpoint para criar um novo produto.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['nome'] = { in: 'formData', type: 'string', description: 'Nome do produto.' }
       #swagger.parameters['preco'] = { in: 'formData', type: 'number', description: 'Preço do produto.' }
       #swagger.parameters['codigo'] = { in: 'formData', type: 'string', description: 'Código do produto.' }
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do produto.'
       } 
       #swagger.responses[200] = { 
           description: 'Produto criado com sucesso.',
           schema: { type: "success", description: "Produto criado com sucesso" }
       }
    */
    let dados = req.body;
    dados.preco = Number(dados.preco)
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/produtos/${req.file.filename}`
    }
    res.json(await criar(dados))
})

router.post("/:id", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Produtos']
       #swagger.description = 'Endpoint para editar um produto existente.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['nome'] = { in: 'formData', type: 'string', description: 'Nome do produto.' }
       #swagger.parameters['preco'] = { in: 'formData', type: 'number', description: 'Preço do produto.' }
       #swagger.parameters['codigo'] = { in: 'formData', type: 'string', description: 'Código do produto.' }
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do produto.'
       } 
       #swagger.responses[200] = { 
           description: 'Produto editado com sucesso.',
           schema: { type: "success", description: "Produto atualizado com sucesso" }
       }
    */
    let dados = req.body;
    dados.preco = Number(dados.preco)
    dados.id = Number(dados.id)
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/produtos/${req.file.filename}`
    }
    res.json(await editar(dados))
})

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Endpoint para deletar um produto pelo ID.'
    /* #swagger.responses[200] = { 
           description: 'Produto deletado com sucesso.',
           schema: { type: "success", description: "Produto deletado com sucesso" }
       } */
    res.json(await deletar(req.params.id))
})
export default router