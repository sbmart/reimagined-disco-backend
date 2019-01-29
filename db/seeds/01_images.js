
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        // knights images
        {
          image_url: 'https://i.ibb.co/3mYV945/dn-Rs1b5-MBAGY59-Gz.jpg',
          caption: 'This is a footworn honey'
        },
        {
          image_url: 'https://i.ibb.co/pQPN4Lj/Mso-Bdxl6h-Ky5-RIB7b-DTW.jpg',
          caption: 'This is a statewide drawer'
        },
        {
          image_url: 'https://i.ibb.co/WyNqVYH/q-WKtai7-LFRx-Y.jpg',
          caption: 'This is a systemless lock'
        },
        {
          image_url: 'https://i.ibb.co/DMPsSvK/Qq-EHDXVJK7f6.jpg',
          caption: 'This is a fruited otter'
        },
        {
          image_url: 'https://i.ibb.co/dK3gYRY/Fwy-Or-DELYOY8e-Gc8.jpg',
          caption: 'This is a wayless chord'
        },
        {
          image_url: 'https://i.ibb.co/WpH0mrb/C0-H6-ITv-E381-G3-Rnh-K.jpg',
          caption: 'This is a bygone beautician'
        },
        {
          image_url: 'https://i.ibb.co/k6TGLKt/Jjjt-Tt6y-Gerw-Ajz.jpg',
          caption: 'This is a stalworth carol'
        },
        {
          image_url: 'https://i.ibb.co/pKj2qNq/Sdd-TD0-DLgz2kgqg-E.jpg',
          caption: 'This is a bated tanker'
        },
        {
          image_url: 'https://i.ibb.co/CJKyt71/i6-OHUZu-Znn-Rn-N.jpg',
          caption: 'This is a lonesome band'
        },
        {
          image_url: 'https://i.ibb.co/t226VXQ/p-Te2z4-Qp1kdj.jpg',
          caption: 'This is a frockless snow'
        },
        {
          image_url: 'https://i.ibb.co/nz177J1/3-ORWYQSMBs8r-Oy-I.jpg',
          caption: 'This is a massy helen'
        },
        {
          image_url: 'https://i.ibb.co/7jSh9Dm/d9-Q96o-Tx-JOa-I6l.jpg',
          caption: 'This is a terrifying witch'
        },
        {
          image_url: 'https://i.ibb.co/QJD4Zsk/R2uq-Ih3s4f5-FMTb-J.jpg',
          caption: 'This is a gruesome skeleton'
        },
        {
          image_url: 'https://i.ibb.co/Xp2H4N4/K7-Px-GWHNEsd8-WF.jpg',
          caption: 'This is a hell-raising evil'
        },
        {
          image_url: 'https://i.ibb.co/y8cjz0w/Htwqq-VYHiz-U.jpg',
          caption: 'This is a murky nightmare'
        },
        // Dragon images
        {
          image_url: 'https://i.ibb.co/wC6r5Jt/x-LJXzh7-R7-Aanv-SCv9-Afa.jpg',
          caption: 'This is a putrid poltergeist',
          likes: 8
        },
        {
          image_url: 'https://i.ibb.co/1MxMf5c/7-Yn-Kx1-Fppr-V6-Yu6-G55-A1.jpg',
          caption: 'This is a macabre dark magic',
          likes: 35
        },
        {
          image_url: 'https://i.ibb.co/GdWrjdm/qt-Jt-Xyf-ZOp-P8wq-KFCza-N.jpg',
          caption: 'This is a frightening nether',
          likes: 79
        },
        {
          image_url: 'https://i.ibb.co/dpFws5d/zscgld2-DXy-Bplxnvc8ka.jpg',
          caption: 'This is a lifeless monster',
          likes: 86
        },
        {
          image_url: 'https://i.ibb.co/RT9xsb6/Tv-Tb-XLmp1jc-GV59-Uiga-K.jpg',
          caption: 'This is a servo tin',
          likes: 98
        },
        {
          image_url: 'https://i.ibb.co/Qd8NMMf/c-UV2tgn-Et1-Om-Nnr-SDu-E2.jpg',
          caption: 'This is a vitric wind',
          likes: 84
        },
        {
          image_url: 'https://i.ibb.co/Pz3BQjb/t-Qylfm-Jo2-KCz-USC8-Efe-C.jpg',
          caption: 'This is a decapitated gas mask',
          likes: 11
        },
        {
          image_url: 'https://i.ibb.co/hZGw7Gx/B38i7gt-P6-Rov-Gw-Qt-JWs-F.jpg',
          caption: 'This is a crannied fifth',
          likes: 31
        },
        {
          image_url: 'https://i.ibb.co/wJT1SLX/vugmt-NXnn-Jqf9q514-I1-K.jpg',
          caption: 'This is a stark bomb',
          likes: 70
        },
        {
          image_url: 'https://i.ibb.co/6wbffrq/i-MBrp-Z21n-Mwqqkutey3t.jpg',
          caption: 'This is a decomposing member of slipknot',
          likes: 51
        },
        {
          image_url: 'https://i.ibb.co/4jbMGtQ/Cw-RJ4x-Zeslj-Ym3rq1-N1-B.jpg',
          caption: 'This is a haunted tombstone',
          likes: 27
        },
        {
          image_url: 'https://i.ibb.co/hZhSWXP/Ke-MApg-Oj2t-UJPnu-LPr0-F.jpg',
          caption: 'This is a headless netherworld',
          likes: 69
        },
        {
          image_url: 'https://i.ibb.co/0nH1PcR/Q4i-UOm1d9-ZMu7-Bnbf-PME.jpg',
          caption: 'This is a dead mummy',
          likes: 47
        },
        {
          image_url: 'https://i.ibb.co/pQfG2th/9-Hdc-Lpxki-Vg7-Uw-Xw-Fsrh.jpg',
          caption: 'This is a petrified blood',
          likes: 52
        },
        {
          image_url: 'https://i.ibb.co/X4RdgK3/Vp-Cjnj-Tk-V2mey-BWC5-W.jpg',
          caption: 'This is a crusty shrunken head',
          likes: 74
        },
        {
          image_url: 'https://i.ibb.co/PtfwhKT/3-DUTsx1r-Pqyuqp-Mk.jpg',
          caption: 'This is a scary cloak',
          likes: 14
        },
        {
          image_url: 'https://i.ibb.co/zZvtn7j/l-UVb5-A3-Ud-Kp-AFcu5w-Ti-N.jpg',
          caption: 'This is a faintish ceramic',
          likes: 65
        },
        {
          image_url: 'https://i.ibb.co/QFSMDqp/zt5-C7-A0mmsco-CAwm-LHE.jpg',
          caption: 'This is an unfelled ominous black cat',
          likes: 14
        }
      ]);
    });
};
