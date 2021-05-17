const express = require("express");
const app = express();
const cors = require("cors");
const Joi = require("@hapi/joi");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Woofer"
    })
});

app.post('/woofs', (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        woof: Joi.string().required()
    });
        const {error, value} = schema.validate(req.body);
        if(error) {
            console.log(res.status(422));
            console.error(error)
        } else {
            console.log(value);
        }
})

app.listen(port, () => {
    console.log(`Server connected on port ${port}`)
});