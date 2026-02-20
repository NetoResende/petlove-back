import { prisma } from "../services/index.js"

async function buscar() {
    try {
        return await prisma.niveis.findMany()
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarPorId(id) {
    try {
        const request = await prisma.niveis.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (request) {
            return request;
        }
        return {
            type: "error",
            description: "Nível não encontrado"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function criar(dados) {

    try {
        const request = await prisma.niveis.create({
            data: dados
        });
        if (request) {
            return {
                type: "success",
                description: "Nível criado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível criar o Nível"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function editar(dados) {

    try {
        const request = await prisma.niveis.update({
            data: dados,
            where: { id: Number(dados.id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Nível atualizado com sucesso",
            };
        }
        return {
            type: "error",
            description: "não foi possível atualizar o nível"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function deletar(id) {

    try {
        const request = await prisma.niveis.delete({
            where: { id: Number(id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Nível deletado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível deletar o Nível"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

export {
    buscar,
    buscarPorId,
    criar,
    editar,
    deletar
    
}