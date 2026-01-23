import { prisma } from "../services/index.js"

async function buscar() {
    try {
        return await prisma.concorrentes.findMany()
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

export {
    buscar
}