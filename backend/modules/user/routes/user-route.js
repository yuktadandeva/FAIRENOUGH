const express = require('express');
const getFriendList = require('../controller/user-controller.js')

const userRoutes = express.Router();
userRoutes.get('/friend-list',getFriendList);
// userRoutes.post('/add-bill',postBill);

module.exports = userRoutes;
