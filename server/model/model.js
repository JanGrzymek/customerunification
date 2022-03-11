const db = require('../db');

const getCustomers = async () => {
  const { rows } = await db.query('SELECT * FROM customer');
  return rows;
};

const postCustomer = async (data) => {
  const { rows } = await db.query(
    'INSERT INTO customer(name, email, bild, adresse) VALUES ($1, $2, $3, $4)',
    [data.name, data.email, data.bild, data.adresse],
  );
  return rows;
};

const deleteCustomer = async (id) => {
  await db.query('DELETE FROM customer WHERE c_id = $1', [id]);
  return {
    code: 200,
    data: 'Deleted',
  };
};

module.exports = {
  getCustomers,
  postCustomer,
  deleteCustomer,
};
