const express = require('express');
const { registerCustomer, deleteCustomer, searchCustomer, getAllCustomer } = require('../controller/basicController');
const Router = express.Router();
Router.route('/register').post(registerCustomer);
Router.route('/delete').post(deleteCustomer);
Router.route('/search').post(searchCustomer);
Router.route('/list').get(getAllCustomer);

module.exports = Router;