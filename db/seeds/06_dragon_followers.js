
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragon_followers').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragon_followers').insert([
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          follower_id: knex('knights').where('name', 'Murky Nightmare').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          follower_id: knex('knights').where('name', 'Fruited Otter').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          follower_id: knex('knights').where('name', 'Wayless Chord').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          follower_id: knex('knights').where('name', 'Stalworth Carol').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          follower_id: knex('knights').where('name', 'Murky Nightmare').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          follower_id: knex('knights').where('name', 'Fruited Otter').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          follower_id: knex('knights').where('name', 'Wayless Chord').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          follower_id: knex('knights').where('name', 'Bated Tanker').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          follower_id: knex('knights').where('name', 'Lonesome Band').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          follower_id: knex('knights').where('name', 'Murky Nightmare').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          follower_id: knex('knights').where('name', 'Wayless Chord').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          follower_id: knex('knights').where('name', 'Bygone Beautician').select('id')
        },      
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          follower_id: knex('knights').where('name', 'Stalworth Carol').select('id')
        },      
          
      ]);
    });
};
