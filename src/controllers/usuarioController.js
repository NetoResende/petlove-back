import { prisma } from "../services/index.js"
import bcrypt from "bcrypt"

async function buscar() {
    try {
        return await prisma.usuarios.findMany({
            include:{
                nivel:true
            }
        })
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}
async function buscarPorId(id) {
    try {
        const request = await prisma.usuarios.findUnique({
            where: {
                id: Number(id)
            },
            include:{
                nivel:true
            }
        });
        if (request) {
            return request;
        }
        return {
            type: "error",
            description: "Usuario não encontrado"
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
        const senhaSegura = await bcrypt.hash(dados.senha, 10)
        dados.senha = senhaSegura

        const request = await prisma.usuarios.create({
            data: dados
        });
        if (request) {
            return {
                type: "success",
                description: "Usuario criado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível criar o usuario"
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
        if (dados.senha) {
            const senhaSegura = await bcrypt.hash(dados.senha, 10)
            dados.senha = senhaSegura

        }

        const request = await prisma.usuarios.update({
            data: dados,
            where: { id: Number(dados.id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Usuario atualizado com sucesso",
            };
        }
        return {
            type: "error",
            description: "não foi possível atualizar o usuario"
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
        const request = await prisma.usuarios.delete({
            where: { id: Number(id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Usuario deletado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível deletar o usuario"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}
async function login(dados) {
    try {
        const usuario = await prisma.usuarios.findFirst({
            where: {
                email: dados.email
            }
        });

        if (usuario) {
            const senhaCorreta = await bcrypt.compare(dados.senha, usuario.senha)

            if (senhaCorreta) {
                return usuario
            }
            return {
                type: "error",
                description: "e-mail ou senha incorreta"
            }
        }

        return {
            type: "error",
            description: "e-mail ou senha incorreta"
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
    deletar,
    login
}