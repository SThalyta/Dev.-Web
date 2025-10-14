const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

router.get('/users', authMiddleware, authorizeRoles("Garçom"), userControllers.getAllUsers);
router.get('/users/:id', userControllers.getUserById);
router.post('/users', userControllers.createUser);
router.put('/users/:id', userControllers.updateUser);
router.delete('/users/:id', userControllers.deleteUser);

module.exports = router;