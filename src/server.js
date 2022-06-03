
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Jane' }
]

app.get('/cliente', (request, response) => {
  response.status(200).json({
    success: true,
    data: users
  });
});

app.get('/cliente/:id', (request, response) => {

  const { id } = request.params;

  const userList = users.filter(obj => obj.id === parseInt(id));

  if (userList.length > 0) {
    response.status(200).json({
      success: true,
      data: userList[0]
    });
  } else {
    response.status(400).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }

});

app.post('/cliente', (request, response) => {
  const { nome } = request.body;

  response.status(200).json({
    success: true,
    message: 'Cliente cadastrado com sucesso!',
    data: {
      id: 1,
      nome,
    },
  });
});

app.put('/cliente', (request, response) => {
  const { nome } = request.body;

  response.status(200).json({
    success: true,
    message: 'Cliente atualizado com sucesso!',
    data: {
      id: 1,
      nome,
    },
  });
});

app.delete('/cliente/:id', (request, response) => {

  const { id } = request.params;

  const userList = users.filter(obj => obj.id === parseInt(id));

  if (userList.length > 0) {
    response.status(200).json({
      success: true,
      message: 'Cliente removido com sucesso!'
    });
  } else {
    response.status(400).json({
      success: false,
      message: 'Cliente não encontrado!',
    });
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})