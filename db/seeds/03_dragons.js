
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragons').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragons').insert([
        {
          name: 'putrid poltergeist',
          species: 'Dragon',
          breed: 'Red Dragon',
          age: 1465,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/wC6r5Jt/x-LJXzh7-R7-Aanv-SCv9-Afa.jpg').select('id')
        },
        {
          name: 'macabre dark magic',
          species: 'Dragon',
          breed: 'Black Dragon',
          age: 1852,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/1MxMf5c/7-Yn-Kx1-Fppr-V6-Yu6-G55-A1.jpg').select('id')
        },
        {
          name: 'frightening nether',
          species: 'Dragon',
          breed: 'Rainbow Dragon',
          age: 1762,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/GdWrjdm/qt-Jt-Xyf-ZOp-P8wq-KFCza-N.jpg').select('id')
        },
        {
          name: 'lifeless monster',
          species: 'Dragon',
          breed: 'Ice Dragon',
          age: 1784,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/dpFws5d/zscgld2-DXy-Bplxnvc8ka.jpg').select('id')
        },
        {
          name: 'servo tin',
          species: 'Dragon',
          breed: 'Green Dragon',
          age: 1463,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/RT9xsb6/Tv-Tb-XLmp1jc-GV59-Uiga-K.jpg').select('id')
        },
        {
          name: 'vitric wind',
          species: 'Dragon',
          breed: 'Red Dragon',
          age: 1792,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/Qd8NMMf/c-UV2tgn-Et1-Om-Nnr-SDu-E2.jpg').select('id')
        },
        {
          name: 'decapitated gas mask',
          species: 'Dragon',
          breed: 'Black Dragon',
          age: 985,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/Pz3BQjb/t-Qylfm-Jo2-KCz-USC8-Efe-C.jpg').select('id')
        },
        {
          name: 'crannied fifth',
          species: 'Dragon',
          breed: 'Black Dragon',
          age: 642,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/hZGw7Gx/B38i7gt-P6-Rov-Gw-Qt-JWs-F.jpg').select('id')
        },
        {
          name: 'stark bomb',
          species: 'Dragon',
          breed: 'Blue Dragon',
          age: 2053,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/wJT1SLX/vugmt-NXnn-Jqf9q514-I1-K.jpg').select('id')
        },
        {
          name: 'decomposing member of slipknot',
          species: 'Dragon',
          breed: 'Blue Dragon',
          age: 2076,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/6wbffrq/i-MBrp-Z21n-Mwqqkutey3t.jpg').select('id')
        },
        {
          name: 'haunted tombstone',
          species: 'Dragon',
          breed: 'Giant Dragon',
          age: 3256,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/4jbMGtQ/Cw-RJ4x-Zeslj-Ym3rq1-N1-B.jpg').select('id')
        },
        {
          name: 'headless netherworld',
          species: 'Dragon',
          breed: 'Red Dragon',
          age: 2456,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/hZhSWXP/Ke-MApg-Oj2t-UJPnu-LPr0-F.jpg').select('id')
        },
        {
          name: 'dead mummy',
          species: 'Dragon',
          breed: 'Living dead Dragon',
          age: 1984,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/0nH1PcR/Q4i-UOm1d9-ZMu7-Bnbf-PME.jpg').select('id')
        },
        {
          name: 'petrified blood',
          species: 'Dragon',
          breed: 'Black Dragon',
          age: 2384,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/pQfG2th/9-Hdc-Lpxki-Vg7-Uw-Xw-Fsrh.jpg').select('id')
        },
        {
          name: 'shrunken head',
          species: 'Dragon',
          breed: 'Navy Dragon',
          age: 3524,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/X4RdgK3/Vp-Cjnj-Tk-V2mey-BWC5-W.jpg').select('id')
        },
        {
          name: 'scary cloak',
          species: 'Dragon',
          breed: 'Black Dragon',
          age: 892,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/PtfwhKT/3-DUTsx1r-Pqyuqp-Mk.jpg').select('id')
        },
        {
          name: 'faintish ceramic',
          species: 'Dragon',
          breed: 'Green Dragon',
          age: 763,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/zZvtn7j/l-UVb5-A3-Ud-Kp-AFcu5w-Ti-N.jpg').select('id')
        },
        {
          name: 'unfelled ominous black cat',
          species: 'Dragon',
          breed: 'Blue Dragon',
          age: 842,
          profile_image_id: knex('images').where('image_url', 'https://i.ibb.co/QFSMDqp/zt5-C7-A0mmsco-CAwm-LHE.jpg').select('id')
        }
      ]);
    });
};
