const express = require('express');

const app = express();

//indica para o express que a aplicação irá utilizar dados em JSON
app.use(express.json());

app.get('/projects', (request, response) => {
  //query params
  const { title, owner } = request.query;
  console.log(title);
  console.log(owner);

  return response.json([
    'Example 1',
    'Example 2'
  ]);
});

app.post('/projects', (request, response) =>{
  //request body
  const { body } = request.body;
  console.log(body);

  return response.json([
    'Example 3',
    'Example 4'
  ]);
});

app.put('/projects/:id', (request, response) => {
  //route params
  const { id } = request.params;
  console.log(id);

  return response.json([
    'Example 5',
    'Example 6'
  ]);
});

app.delete('/projects/:id', (request, response) =>{
  return response.json([
    'Example 7',
    'Example 8',
    'Example 9'
  ])
});

app.listen(3333, () =>{
  console.log('Back-end started');
});