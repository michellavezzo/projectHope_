const express = require('express');

const AuthController = require('./app/controllers/authController');
const ProjectController = require('./app/controllers/projectController');

const authMiddleware = require('./app/middlewares/auth');

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/authenticate', AuthController.authenticate);
router.post('/forgot_password', AuthController.forgotPassword);
router.post('/reset_password', AuthController.resetPassword);

router.use(authMiddleware);

router.get('/projects/', ProjectController.index);
router.get('/projects/:projectId', ProjectController.show);
router.post('/projects/', ProjectController.create);
router.put('/projects/:projectId', ProjectController.update);
router.delete('/projects/:projectId', ProjectController.destroy);

module.exports = router;