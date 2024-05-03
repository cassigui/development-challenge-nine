import { Router, Request, Response } from "express";
import UserRepository from '../repositories/UserRepository'

const PostUserRouter = Router()

PostUserRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, nome, email, data_nascimento, endereco } = await req.body

  const usuario = {
    id,
    nome,
    email,
    data_nascimento,
    endereco
  }

  UserRepository.setUsers(usuario)

  return res.status(201).json(usuario)

})

export default PostUserRouter