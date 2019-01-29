
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knights').del()
    .then(function () {
      // Inserts seed entries
      return knex('knights').insert([
        {
          name: 'Footworn Honey',
          email: 'footworn@honey.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/3mYV945/dn-Rs1b5-MBAGY59-Gz.jpg').select('id')
        },
        {
          name: 'Statewide Drawer',
          email: 'statewide@drawer.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/pQPN4Lj/Mso-Bdxl6h-Ky5-RIB7b-DTW.jpg').select('id')
        },
        {
          name: 'Systemless Lock',
          email: 'systemless@lock.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/WyNqVYH/q-WKtai7-LFRx-Y.jpg').select('id')
        },
        {
          name: 'Fruited Otter',
          email: 'fruited@otter.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/DMPsSvK/Qq-EHDXVJK7f6.jpg').select('id')
        },
        {
          name: 'Wayless Chord',
          email: 'wayless@chord.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/dK3gYRY/Fwy-Or-DELYOY8e-Gc8.jpg').select('id')
        },
        {
          name: 'Bygone Beautician',
          email: 'bygone@beautician.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/WpH0mrb/C0-H6-ITv-E381-G3-Rnh-K.jpg').select('id')
        },
        {
          name: 'Stalworth Carol',
          email: 'stalworth@carol.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/k6TGLKt/Jjjt-Tt6y-Gerw-Ajz.jpg').select('id')
        },
        {
          name: 'Bated Tanker',
          email: 'bated@tanker.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/pKj2qNq/Sdd-TD0-DLgz2kgqg-E.jpg').select('id')
        },
        {
          name: 'Lonesome Band',
          email: 'lonesome@band.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/CJKyt71/i6-OHUZu-Znn-Rn-N.jpg').select('id')
        },
        {
          name: 'Frockless Snow',
          email: 'frockless@snow.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/t226VXQ/p-Te2z4-Qp1kdj.jpg').select('id')
        },
        {
          name: 'Massy Helen',
          email: 'massy@helen.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/nz177J1/3-ORWYQSMBs8r-Oy-I.jpg').select('id')
        },
        {
          name: 'Terrifying Witch',
          email: 'terrifying@witch.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/7jSh9Dm/d9-Q96o-Tx-JOa-I6l.jpg').select('id')
        },
        {
          name: 'Gruesome Skeleton',
          email: 'gruesome@skeleton.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/QJD4Zsk/R2uq-Ih3s4f5-FMTb-J.jpg').select('id')
        },
        {
          name: 'Hell-raising Evil',
          email: 'hell-raising@evil.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/Xp2H4N4/K7-Px-GWHNEsd8-WF.jpg').select('id')
        },
        {
          name: 'Murky Nightmare',
          email: 'murky@nightmare.com',
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/y8cjz0w/Htwqq-VYHiz-U.jpg').select('id')
        }
      ]);
    });
};
