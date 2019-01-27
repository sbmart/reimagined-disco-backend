
exports.up = knex => {
    return knex.schema.createTable('knight_friends', table => {
      table.integer('knight_one').references('knights.id');
      table.integer('knight_two').references('knights.id');
      table.string('status').defaultTo('pending');
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('knight_friends');
  };
