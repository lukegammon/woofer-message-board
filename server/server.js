require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Joi = require("@hapi/joi");
const monk = require("monk");
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4udsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// INCLUDE HELMET

// Set up bad-words filter
const Filter = require('bad-words');
filter = new Filter();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('client'));

// Connect to DB with monk
const db = monk(dbUrl, () => console.log("db set"));
const collection = db.get("woofs");

db.then(() => {
    console.log("connected to db");
})


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: "client" } )
});

app.post('/woofs', (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().required().max(20),
        woof: Joi.string().required().max(200),
    });
        const {error, value} = schema.validate(req.body);
        if(error) {
            console.error(error)
        } else {
            // Create oject and filter for bad words
            const woofData = {
                name: filter.clean(value.name),
                woof: filter.clean(value.woof),
                created: new Date()
            };
            // Add the created woof to the database
            collection.insert(woofData);
        }
})

app.get('/woofs', (req, res, next) => {
    collection.find()
    .then(woofs => {
        res.json(woofs);
    }).catch(next);
});

app.listen(port, () => {
    console.log(`Server connected on port ${port}`)
});