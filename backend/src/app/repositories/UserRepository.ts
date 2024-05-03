import User from "../entities/User";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User)

const getUsers = (): Promise<User[]> => {
  return userRepository.find()
}

const setUsers = (usuario: User) => {
  userRepository.insert(usuario)
}

const deleteUsers = (usuario: User) => {
  userRepository.delete(usuario)
}

const updateUsers = (usuario:User, newUser:User) => {
  userRepository.update(usuario, newUser)
}

export default { getUsers, setUsers, deleteUsers, updateUsers }