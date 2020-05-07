
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Albert Rocha' },
        { username: 'Poliana Rocha' },
      ]);
    });
};
