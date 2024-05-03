import {Router, Request, Response} from 'express'
import UserRepository from '../repositories/UserRepository'
import { AppDataSource } from "../../database/data-source"
import User from '../entities/User'

const UpdateUserRouter = Router()

UpdateUserRouter.put("/:id", async (req:Request, res: Response) => {

    const repository = AppDataSource.getRepository(User)
    const {id} =  req.params  
    
    const {nome, email, data_nascimento, endereco} = await req.body
    
    const novoUsuario ={
        id,
        nome,
        email,
        data_nascimento,
        endereco
    }

    const user = await repository.findOne({where:{id:id}})
    if(!user) {
        return res.status(404).send("Usuário não encontrado")
    }

    try {
       await UserRepository.updateUsers(user, novoUsuario)

       return res.status(200).send("Usuario atualizado com sucesso!!!")
    }catch {
        return res.status(500).send("Error no Update de usuário")
    }
    
})

export default UpdateUserRouter