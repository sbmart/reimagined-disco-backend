
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragon_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragon_images').insert([
        // each dragon can have tons of images
        {
          dragon_id: knex('dragons').where('name', 'putrid poltergeist').select('id'),
          image_id: knex('images').where('image_url', 'https://i.ibb.co/wC6r5Jt/x-LJXzh7-R7-Aanv-SCv9-Afa.jpg').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'macabre dark magic').select('id'),
          image_id: knex('images').where('image_url', 'https://i.ibb.co/1MxMf5c/7-Yn-Kx1-Fppr-V6-Yu6-G55-A1.jpg').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'frightening nether').select('id'),
          image_id: knex('images').where('image_url', 'https://i.ibb.co/GdWrjdm/qt-Jt-Xyf-ZOp-P8wq-KFCza-N.jpg').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'lifeless monster').select('id'),
          image_id: knex('images').where('image_url', 'https://i.ibb.co/dpFws5d/zscgld2-DXy-Bplxnvc8ka.jpg').select('id')
        },
        {
          dragon_id: knex('dragons').where('name', 'servo tin').select('id'),
          image_id: knex('images').where('image_url', 'https://i.ibb.co/RT9xsb6/Tv-Tb-XLmp1jc-GV59-Uiga-K.jpg').select('id')
        }        
      ]);
    });
};
