
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knight_friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('knight_friends').insert([
        {
          knight_one: knex('knights').where('name', 'Footworn Honey').select('id'),
          knight_two: knex('knights').where('name', 'Statewide Drawer').select('id'),
          status: 'active'
        },

        {
          knight_one: knex('knights').where('name', 'Wayless Chord').select('id'),
          knight_two: knex('knights').where('name', 'Gruesome Skeleton').select('id'),
          status: 'active'
        }
      ]);
    });
};
