const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to API');
});

app.get('/todos', (req, res) => {
    const todos =[
        {id:1, text:'Todo One'},
        {id:2, text:'Todo Two'},
        {id:3, text:'Todo Three'},
    ];

    res.json(todos);
});


app.listen(5000, () => {
    console.log('Server listening on http://localhost:5000');
});