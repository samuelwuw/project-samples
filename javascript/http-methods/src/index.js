const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'Example 1',
    'Example 2'
  ]);
});

app.post('/projects', (request, response) =>{
  return response.json([
    'Example 3',
    'Example 4'
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Example 5',
    'Example 6'
  ]);
});

app.delete('/projects/:id', (request, response) =>{
  return response.json([
    'Example 7',
    'Example 8'
  ])
});

app.listen(3333, () =>{
  console.log('Back-end started');
});