const express = require('express')

const app = express();

app.get('/', (req, res) => {
    fetch('http://webapi:5000/todos')  //http://localhost:5000/todos
    .then((response) =>response.json())
    .then(data=>{
        res.send(data);
    });
});

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});