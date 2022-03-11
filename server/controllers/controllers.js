const asyncHandler = require('express-async-handler');
const model = require('../model/model');

const getCustomers = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getCustomers());
});

const postCustomer = asyncHandler(async (req, res) => {
  res.status(200).json(await model.postCustomer(req.body));
});

const deleteCustomer = asyncHandler(async (req, res) => {
  res.status(200).json(await model.deleteCustomer(req.params.id));
});

module.exports = {
  getCustomers,
  postCustomer,
  deleteCustomer,
};
