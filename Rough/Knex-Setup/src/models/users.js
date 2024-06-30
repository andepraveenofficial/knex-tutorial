// database
const knex = require('../db/db');

function getAllUsers() {
  return knex.select().table('users');
}

function createUser(user) {
  return knex('users').insert(user);
}

function updateUser(id, user) {
  return knex('users').where({ id }).update(user);
}

function deleteUser(id) {
  return knex('users').where({ id }).del();
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};