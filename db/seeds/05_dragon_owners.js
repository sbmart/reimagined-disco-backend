
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragon_owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragon_owners').insert([
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          owner_id: knex('knights').where('name', 'Footworn Honey').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          owner_id: knex('knights').where('name', 'Statewide Drawer').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          owner_id: knex('knights').where('name', 'Systemless Lock').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'lifeless monster').select('id'),
          owner_id: knex('knights').where('name', 'Fruited Otter').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'servo tin').select('id'),
          owner_id: knex('knights').where('name', 'Wayless Chord').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'vitric wind').select('id'),
          owner_id: knex('knights').where('name', 'Bygone Beautician').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'decapitated gas mask').select('id'),
          owner_id: knex('knights').where('name', 'Stalworth Carol').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'crannied fifth').select('id'),
          owner_id: knex('knights').where('name', 'Bated Tanker').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'stark bomb').select('id'),
          owner_id: knex('knights').where('name', 'Lonesome Band').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'decomposing member of slipknot').select('id'),
          owner_id: knex('knights').where('name', 'Frockless Snow').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'haunted tombstone').select('id'),
          owner_id: knex('knights').where('name', 'Massy Helen').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'headless netherworld').select('id'),
          owner_id: knex('knights').where('name', 'Terrifying Witch').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'dead mummy').select('id'),
          owner_id: knex('knights').where('name', 'Gruesome Skeleton').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'petrified blood').select('id'),
          owner_id: knex('knights').where('name', 'Hell-raising Evil').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'shrunken head').select('id'),
          owner_id: knex('knights').where('name', 'Murky Nightmare').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'scary cloak').select('id'),
          owner_id: knex('knights').where('name', 'Footworn Honey').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'faintish ceramic').select('id'),
          owner_id: knex('knights').where('name', 'Statewide Drawer').select('id')
        } ,
        {
          dragon_id: knex('dragons').where('name', 'unfelled ominous black cat').select('id'),
          owner_id: knex('knights').where('name', 'Systemless Lock').select('id')
        }         
      ]);
    });
};
