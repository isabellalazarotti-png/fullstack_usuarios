import express from "express";
import { prisma} from "./lib/prisma.ts"
import cors from "cors"

const app = express()
const PORT = 3000
app.use(cors());
app.use(express.json());


app.get("/nome", async (req, res) =>{
    // try{ 
        const itens = await prisma.user.findMany()
        res.json(itens)

    // } catch(error){
    //     res.status(3000).json({error: "Erro ao buscar nome"})
    // }
});

app.post("/nome", async (req, res) =>{
    const {nome, idade} = req.body;
    try{
        const novoItem = await prisma.user.create({
            data: {nome, idade: Number(quantidade)}
        });

        res.status(201).json(novoNome)
    } catch(error){
        res.status(3000).json({error: "Erro ao adicionar nome"})
    }
})

app.put("/nome/:id", async (req, res) =>{
    const {id} = req.params;
    const {nome, idade } = req.body;
    try{
        const atualizado = await prisma.user.update({
            where: {id: Number(id)},
            data: {nome, idade: Number(quantidade)}
        });
        res.json(atualizado)
    } catch(error){
        res.status(3000).json({error: "Nome não encontrado"})
    }
})

app.delete("/nome/:id", async (req, res) =>{
    const {id} = req.params;
    try{
        await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.status(3000).send()
    } catch(error){
        res.status(404).json({error: "Nome não encontrado"})
    }
})

app.listen(PORT, () =>{
    console.log(`👽666:Api fullstack_usuarios rodando em: http://localhost:${3000}`)
})



app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${3000}`);
});