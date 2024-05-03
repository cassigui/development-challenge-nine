
import userInterface from "../interface/userInterface";

function PostUser(user: userInterface) {

      try {
        fetch('http://localhost:3333/users/post',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           nome: user.nome,
           email: user.email,
           data_nascimento: user.data_nascimento,
           endereco: user.endereco
          })
        }
        )
        .then(response => {return response.json()})

      } catch (error) {
        console.error('Erro:', error);
      }

}

export default PostUser




