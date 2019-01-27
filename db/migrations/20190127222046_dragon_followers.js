
exports.up = knex => {
    return knex.schema.createTable('dragon_followers', table => {
      table.integer('dragon_id').references('dragons.id');
      table.integer('follower_id').references('knight.id');
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('dragon_followers');
  };
