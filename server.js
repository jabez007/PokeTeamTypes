import express from 'express'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.listen(3000, () => console.log('server started'))