import { prisma } from "../services/index.js"
import XLSX from "xlsx";
import fs from "fs";

async function buscar() {
    try {
        return await prisma.missoes.findMany({
            include: {
                concorrentes: true,
                missao_produto: {

                    orderBy: {
                        produtos: {
                            id: "asc"
                        }
                    },
                    include: {
                        produtos: true // Apenas inclui os dados do produto
                    }

                }
            },
            orderBy: {
                id: "asc"
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
        const request = await prisma.missoes.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                concorrentes: true,
                missao_produto: {
                    include: {
                        produtos: true
                    }
                }
            }
        });
        if (request) {
            return request;
        }
        return {
            type: "error",
            description: "Missão não encontrado"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function criar(req, res) {

    try {
        if (!req.file) {
            return res.status(400).json({
                type: "error",
                description: "Arquivo não enviado."
            });
        }

        const { Produto_id } = req.body;
        const caminho = req.file.path;

        const workbook = XLSX.readFile(caminho);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json(worksheet, {
            defval: "",
            blankrows: false
        });

        const rowsNormalizadas = rows.map(row => {
            const novo = {};
            for (const key in row) {
                novo[key.toLowerCase().trim()] = row[key];
            }
            return novo;
        });

        const produtos = [];

        for (let i = 0; i < rowsNormalizadas.length; i++) {
            const linha = rowsNormalizadas[i];

            if (!linha.nome || linha.preco === "" || linha.preco == null) {
                throw new Error(`Linha ${i + 2} inválida.`);
            }

            let preco = String(linha.preco).trim();
            preco = preco.replace(/\./g, "").replace(",", ".");
            preco = Number(preco);

            if (isNaN(preco)) {
                throw new Error(`Linha ${i + 2}: preço inválido (${linha.preco}).`);
            }

            produtos.push({
                nome: String(linha.nome).trim(),
                codigo: linha.codigo ? String(linha.codigo).trim() : null,
                preco
            });
        }

        // 🔒 Transaction garante consistência
        await prisma.$transaction(async (tx) => {
            // 1️⃣ Insere produtos individualmente para obter IDs
            const produtosCriados = [];

            for (const produto of produtos) {
                const criado = await tx.produtos.create({
                    data: produto
                });
                produtosCriados.push(criado);
            }

            // 2️⃣ Cria a missão APÓS produtos existirem
            await tx.missoes.create({
                data: {
                    Produto_id: Number(Produto_id),
                    missao_produto: {
                        create: produtosCriados.map(p => ({
                            produto_id: p.id
                        }))
                    }
                }
            });
        });

        fs.unlinkSync(caminho);

        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        });

    } catch (error) {
        res.status(400).json({
            type: "error",
            description: error.message
        });
    }
}

async function deletar(id) {

    try {
        const request = await prisma.missoes.delete({
            where: { id: Number(id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Missão deletado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível deletar o Missão"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function coletar(dados) {

    try {
        const request = await prisma.missao_produto.update({
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
export {
    buscar,
    buscarPorId,
    criar,
    deletar,
    coletar

}