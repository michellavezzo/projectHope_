const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require ('crypto');
const mailer = require('../../modules/mailer');


const authConfig = require('../../config/auth');

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

router.post('/forgot_password', async (req,res) => {
    const { email } = req.body;

    try {

        const user = await User.findOne( { email } );

        if(!user)
            return res.status(400).send({ error: 'User not Found' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

    mailer.sendMail({
        to: email,
        from: 'michellavezzo@gmail.com',
        template: 'auth/forgot_password',
        context: { token },
    }, (err) => {
        if(err)
            return res.status(400).send({ error: 'Error on forgot password, Try again'});
        
        return res.send();
    });

    } catch (err) {
        res.status(400).send({ error: 'Error on forgot Password, Try again!'});
    }
});

router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body; 

    try {
        const user = await User.findOne( { email } )
            .select('+passwordResetToken passwordResetExpires');

        if(!user)
            return res.status(400).send({ error: 'User not Found' });
        if(token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token Invalid' });
        
        const now = new Date();

        if (now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token Expired, generate a new one' });

        user.password = password;

        await user.save();

        res.send();

        
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: 'Cannot reset Password, Try again' });  
        
    }
});

module.exports = app => app.use('/auth', router);



