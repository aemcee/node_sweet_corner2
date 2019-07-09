const express = require('express');
// default value of 9000
const PORT = process.env.PORT || 9000;

// previously we called server
const app = express();

// middleware to encode the data sent by post
app.use(express.urlencoded({extended: false}));

// this sends the data raw. Note JSON application must be turned on in postman in headers
app.use(express.json());

// method chained off of app. what method you expect the request to come
app.get('/', (request, response) => {
    // function gets called when request comes to forward slash
    console.log('Request Received from: ', request.url);

    // send something back client
    response.send({
        message: 'This is the home route',
        user: {
            name: 'George Hill',
            email: 'george@test.com'
        }
    });
});

app.get('/extra-data', (req, res) => {
    // console.log('Query Data: ', req.query);

    res.send({
        message: 'Get query data',
        queryData: req.query,
        moreData: 'Here is more data'
    });
});

// GET /article

// const resp = {
//     title: 'asd',
//     content: '',
//     author: {
//         name: '',
//         email: '',
//     }
// }
app.get('/article', (req, res) => {
    res.send({
        title: 'asd',
        content: 'asdf',
        author: {
            name: 'FOB',
            email: 'FOB@base.com'
        }
    });
});

app.post('/sign-in', (req, res) => {
    console.log('POST DATA: ', req.body);

    res.send({
        message: 'You have signed in',
        postData: req.body
    });
});

// PATCH /update-user
// PATCH DATA: name, email

// OUTPUT { message: 'User updated', patchData: {}}
app.patch('/update-user', (req, res) => {
    res.send({
        message: 'User updated',
        patchData: req.body
    });
});






app.listen(PORT, () => {
    console.log('Server running at localhost: ' + PORT);
});