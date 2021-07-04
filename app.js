const axios = require('axios');
axios({
  method: 'GET',
  url: 'http://localhost:3000/todos',
})
  .then((todos) => {
    console.log(todos.db);
  })
  .catch((err) => {
    console.err(err);
  });

axios({
  method: 'POST',
  url: 'http://localhost:3000/post',
})
  .then((todos) => {
    console.log(post.db);
  })
  .catch((err) => {
    console.err(err);
  });
