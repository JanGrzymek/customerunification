const express = require('express');

const { getCustomers, postCustomer, deleteCustomer } = require('../controllers/controllers');

const router = express.Router();

router.get('/customers', getCustomers);

router.post('/customers', postCustomer);

router.delete('/customers/:id', deleteCustomer);
module.exports = router;
