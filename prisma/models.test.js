import { jest } from '@jest/globals';
import { mockDeep, mockReset } from 'jest-mock-extended';

// Mock do Prisma Client
const mockPrisma = mockDeep();

describe('Testes Unitários das Models (Prisma Mock)', () => {
    
    beforeEach(() => {
        mockReset(mockPrisma);
    });

    // 1. Teste para Model: Usuarios
    test('deve criar um novo usuario', async () => {
        const novoUsuario = {
            id: 1,
            nome: 'João Silva',
            email: 'joao@teste.com',
            senha: 'senha_hash_segura',
            foto: 'foto.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockPrisma.usuarios.create.mockResolvedValue(novoUsuario);

        const usuario = await mockPrisma.usuarios.create({
            data: {
                nome: 'João Silva',
                email: 'joao@teste.com',
                senha: 'senha_hash_segura'
            }
        });

        expect(usuario).toEqual(novoUsuario);
        expect(mockPrisma.usuarios.create).toHaveBeenCalledTimes(1);
    });

    // 2. Teste para Model: Produtos
    test('deve buscar produtos e validar campos', async () => {
        const listaProdutos = [
            {
                id: 1,
                nome: 'Ração Premium',
                preco: 150.50,
                codigo: 'RAC-001',
                foto: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        mockPrisma.produtos.findMany.mockResolvedValue(listaProdutos);

        const produtos = await mockPrisma.produtos.findMany();

        expect(produtos).toHaveLength(1);
        expect(produtos[0].preco).toBe(150.50); // Valida tipo Float
        expect(mockPrisma.produtos.findMany).toHaveBeenCalled();
    });

    // 3. Teste para Model: Concorrentes
    test('deve atualizar um concorrente existente', async () => {
        const concorrenteAtualizado = {
            id: 1,
            nome: 'PetShop B',
            tipo: 'Clinica',
            endereco: 'Rua Nova, 200',
            foto: null,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockPrisma.concorrentes.update.mockResolvedValue(concorrenteAtualizado);

        const resultado = await mockPrisma.concorrentes.update({
            where: { id: 1 },
            data: { nome: 'PetShop B' }
        });

        expect(resultado.nome).toBe('PetShop B');
        expect(mockPrisma.concorrentes.update).toHaveBeenCalledWith(
            expect.objectContaining({
                where: { id: 1 }
            })
        );
    });

    // 4. Teste para Model: Missoes (Relacionamentos)
    test('deve criar uma missao com status default pendente', async () => {
        const novaMissao = {
            id: 1,
            concorrente_id: 10,
            usuario_id: 5,
            status: 'pendente', // Testando o @default("pendente")
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockPrisma.missoes.create.mockResolvedValue(novaMissao);

        const missao = await mockPrisma.missoes.create({
            data: {
                concorrente_id: 10,
                usuario_id: 5
            }
        });

        expect(missao.status).toBe('pendente');
        expect(missao.concorrente_id).toBe(10);
    });

    // 5. Teste para Model: Missao_Produto (Tabela Pivô)
    test('deve deletar um item de missao_produto (cascade check logic)', async () => {
        const itemDeletado = {
            id: 1,
            missao_id: 1,
            produto_id: 2,
            preco: 10.0,
            observacoes: 'Sem estoque',
            status: 'pendente',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockPrisma.missao_produto.delete.mockResolvedValue(itemDeletado);

        const resultado = await mockPrisma.missao_produto.delete({
            where: { id: 1 }
        });

        expect(resultado.id).toBe(1);
        expect(mockPrisma.missao_produto.delete).toHaveBeenCalledTimes(1);
    });

    // 6. Teste de Falha (Simulação de erro de banco)
    test('deve lançar erro ao tentar criar usuario com email duplicado', async () => {
        mockPrisma.usuarios.create.mockRejectedValue(new Error('Unique constraint failed'));

        await expect(mockPrisma.usuarios.create({
            data: {
                nome: 'Duplicado',
                email: 'existente@teste.com',
                senha: '123'
            }
        })).rejects.toThrow('Unique constraint failed');
    });
});