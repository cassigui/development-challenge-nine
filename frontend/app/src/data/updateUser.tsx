import userInterface from "../interface/userInterface";

async function updateUser(user: userInterface) {
  try {
    const response = await fetch(`http://localhost:3333/users/put/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorMessage = `Falha ao atualizar usuário: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
}

export default updateUser;
