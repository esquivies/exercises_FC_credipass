const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/palindrome", (req, res) => {
    const phrase = req.body.phrase;
    array_phrase = phrase.split('');
    let inverse_phrase = [];

    for (let index = phrase.length-1; index >= 0; index--) {
        inverse_phrase.push(array_phrase[index]);
    }

    console.log(array_phrase.join(''));
    console.log(inverse_phrase.join(''));
    
    if(inverse_phrase.join('') === array_phrase.join(''))
        res.json({"palindrome": true});
    else
        res.json({"palindrome": false});
});

const port = 8080;
console.log('server started..');
app.listen(port);

// Basicamente aqui capturo la frase, la duplico invertidamente y las comparo
// separando la frase en arrays y manipulandolo para obtener la inversion