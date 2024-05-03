import { Request, Response, Router } from 'express'
import UserRepository from '../repositories/UserRepository'

const GetUserRouter = Router()

GetUserRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const users = await UserRepository.getUsers()
  return res.status(200).json(users) 
})

export default GetUserRouter