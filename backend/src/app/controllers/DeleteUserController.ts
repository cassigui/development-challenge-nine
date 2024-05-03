import { Request, Response, Router } from "express"
import { AppDataSource } from "../../database/data-source"
import User from "../entities/User"

const DeleteUserRouter = Router()

DeleteUserRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const repository = AppDataSource.getRepository(User)

  const user = await repository.findOne({ where: { id: id } })
  if (!user) {
    return res.status(404).send("O usuário de id " + id + " não foi encontrado");
  }

  try {

    await repository.delete(id)

    return res.status(200).send("Usuário deletado com sucesso!")
  } catch (error) {
    return res.status(500).send("Error na deleção do usuário")
  }
})

export default DeleteUserRouter;

