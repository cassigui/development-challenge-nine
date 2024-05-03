import { Delete, Edit, Update } from "@mui/icons-material";
import deleteUser from "../data/deleteUser";
import { ChangeEvent, useEffect, useState } from "react";
import userInterface from '../interface/userInterface';
import GetUsers from "../data/getUsers";
import AddIcon from '@mui/icons-material/Add';
import PostUser from '../data/postUser';
import updateUser from "../data/updateUser";

function TableComponent() {

  const [onUpdate, setOnUpdate] = useState(false);
  const [users, setUsers] = useState<userInterface[]>([]);
  const [formData, setFormData] = useState<userInterface>({
    id: '',
    nome: '',
    email: '',
    data_nascimento: '',
    endereco: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    GetUsers()
      .then(result => {
        setUsers(result);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      fetchData(); // Atualiza a lista após a exclusão bem-sucedida
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (user: userInterface) => {
    setFormData(user);
    setOnUpdate(true);
  };

  const handleSubmit = async () => {
    if (onUpdate) {
      await updateUser(formData);
      setOnUpdate(false);
    } else {
      await PostUser(formData);
    }
    setFormData({
      id: '',
      nome: '',
      email: '',
      data_nascimento: '',
      endereco: '',
    });
    fetchData();
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome:"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email:"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="data_nascimento">Data de Nascimento:</label>
        <input
          type="date"
          max={'2024-04-30'}
          name="data_nascimento"
          placeholder="Data de Nascimento:"
          value={formData.data_nascimento}
          onChange={handleChange}
          required
        />

        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço:"
          value={formData.endereco}
          onChange={handleChange}
          required
        />

        <button type="submit" name="adicionar">
          {onUpdate ? <Update className="icon" /> : <AddIcon className="icon" />}
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Endereco</th>
            <th>Alterar Tabela</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.data_nascimento}</td>
              <td>{user.endereco}</td>
              <td className="buttonsCollumn">
                <button type="button" name='editar' onClick={() => handleUpdate(user)}>
                  <Edit className='icon' />
                </button>
                <button type="button" name='remover' onClick={() => handleDeleteUser(user.id!)}>
                  <Delete className='icon' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;
