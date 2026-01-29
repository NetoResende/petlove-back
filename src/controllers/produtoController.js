import { prisma } from "../services/index.js"

async function buscar() {
    try {
        return await prisma.produtos.findMany()
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarPorId(id) {
    try {
        const request = await prisma.produtos.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (request) {
            return request;
        }
        return {
            type: "error",
            description: "Produto não encontrado"
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
        const request = await prisma.produtos.create({
            data: dados
        });
        if (request) {
            return {
                type: "success",
                description: "Produto criado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível criar o Produto"
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
        const request = await prisma.produtos.update({
            data: dados,
            where: { id: Number(dados.id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Produto atualizado com sucesso",
            };
        }
        return {
            type: "error",
            description: "não foi possível atualizar o Produto"
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
        const request = await prisma.produtos.delete({
            where: { id: Number(id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Produto deletado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível deletar o Produto"
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