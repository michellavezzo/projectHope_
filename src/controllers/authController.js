const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}


// rota de registro
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne( { email }))
            return res.status(400).send({ error: 'Email already exists' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
         });
         
    } catch (err) {
        return res.status(400).send({ error: 'Registration Failed' });
    }

});

// rota de autenticação 
router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    //busca user com email
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'User Not Found' });

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Wrong Password' });

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,

    });

    res.send({ 
        user, 
        token: generateToken({ id: user.id }), 
    });

});


module.exports = app => app.use('/auth', router);

