import express from "express"
import { buscar, buscarPorId, criar, deletar, editar } from "../controllers/usuarioController.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/usuarios/');
    },
    filename: function (req, file, cb) {
        const extensaoArquivo = path.extname(file.originalname);
        const nomeArquivo = `${Date.now()}${extensaoArquivo}`;
        cb(null, nomeArquivo);
    }
});
const upload = multer({ storage });
const router = express.Router()

router.get("/", async (req,res)=>{
    // #swagger.tags = ['Usuarios']
    // #swagger.description = 'Endpoint para buscar todos os usuários.'
    /* #swagger.responses[200] = { 
        description: 'Lista de usuários encontrada com sucesso.',
        schema: [{
            id: 1,
            nome: "Nome do Usuário",
            email: "email@teste.com",
            senha: "hash_da_senha",
            foto: "http://localhost:8000/uploads/usuarios/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }]
    } */
res.json(await buscar())
})

router.get("/:id", async (req,res)=>{
    // #swagger.tags = ['Usuarios']
    // #swagger.description = 'Endpoint para buscar um usuário pelo ID.'
    /* #swagger.responses[200] = { 
        description: 'Usuário encontrado com sucesso.',
        schema: {
            id: 1,
            nome: "Nome do Usuário",
            email: "email@teste.com",
            senha: "hash_da_senha",
            foto: "http://localhost:8000/uploads/usuarios/foto.jpg",
            createdAt: "2023-10-27T10:00:00.000Z",
            updatedAt: "2023-10-27T10:00:00.000Z"
        }
    } */
res.json(await buscarPorId (req.params.id))
})

router.post("/", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Usuarios']
       #swagger.description = 'Endpoint para criar um novo usuário.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['nome'] = { in: 'formData', type: 'string', description: 'Nome do usuário.' }
       #swagger.parameters['email'] = { in: 'formData', type: 'string', description: 'Email do usuário.' }
       #swagger.parameters['senha'] = { in: 'formData', type: 'string', description: 'Senha do usuário.' }
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do usuário.'
       } 
       #swagger.responses[200] = { 
           description: 'Usuário criado com sucesso.',
           schema: { type: "success", description: "Usuario criado com sucesso" }
       }
    */
    let dados = req.body;
   
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/usuarios/${req.file.filename}`
    }
res.json(await criar (dados))
})

router.post("/:id", upload.single("foto"), async (req, res) => {
    /* #swagger.tags = ['Usuarios']
       #swagger.description = 'Endpoint para editar um usuário existente.'
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['nome'] = { in: 'formData', type: 'string', description: 'Nome do usuário.' }
       #swagger.parameters['email'] = { in: 'formData', type: 'string', description: 'Email do usuário.' }
       #swagger.parameters['senha'] = { in: 'formData', type: 'string', description: 'Senha do usuário.' }
       #swagger.parameters['foto'] = {
           in: 'formData',
           type: 'file',
           description: 'Foto do usuário.'
       } 
       #swagger.responses[200] = { 
           description: 'Usuário editado com sucesso.',
           schema: { type: "success", description: "Usuario atualizado com sucesso" }
       }
    */
    let dados = req.body;
   dados.id = Number (dados.id)
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get("host")}/uploads/usuarios/${req.file.filename}`
    }
res.json(await editar (dados))
})

router.delete("/:id", async (req,res)=>{
    // #swagger.tags = ['Usuarios']
    // #swagger.description = 'Endpoint para deletar um usuário pelo ID.'
    /* #swagger.responses[200] = { 
           description: 'Usuário deletado com sucesso.',
           schema: { type: "success", description: "Usuario deletado com sucesso" }
       } */
res.json(await deletar (req.params.id))
})
export default router