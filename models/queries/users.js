const knex = require('../connection');

function getAllUsers() {
  return knex('users')
  .select('*');
}

function addUser(user) {
  return knex('users')
  .insert(user)
  .returning('*');
}

function updateUser(id, user) {
  return knex('users')
  .update(user)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deleteUser(id) {
  return knex('user')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser
};
