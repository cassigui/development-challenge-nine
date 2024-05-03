function deleteUser(userId: string){
  try {
    fetch(`http://localhost:3333/users/delete/${userId}`,
     {
       method: 'DELETE'
      }
    )
    .then(response=> {
      if(!response.ok){
        throw new Error("Error ao deletar o usuário")
      }
      console.log("Usuário deletado com sucesso")
    })
  }catch (err){
    console.error("Erro", err)
  }
}

export default deleteUser