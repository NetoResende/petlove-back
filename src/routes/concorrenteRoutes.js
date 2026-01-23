import express from "express"
import { buscar } from "../controllers/concorrenteController.js"
const router = express.Router()

router.get("/", async (req,res)=>{
res.json(await buscar())
})

export default router