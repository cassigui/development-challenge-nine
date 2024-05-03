async function GetUsers() {
  try {
    const response = await fetch('http://localhost:3333/users/get');
    if (!response.ok) {
      throw new Error('Falha ao buscar usuários');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export default GetUsers;
