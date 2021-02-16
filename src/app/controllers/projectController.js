const express = require('express');
const authMiddleware = require('../middlewares/auth');


const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId }); //caso precise de alguma info eu pego ela por aqui

});

module.exports = app => app.use('/projects', router);