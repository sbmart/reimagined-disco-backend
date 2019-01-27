
exports.up = knex => {
    return knex.schema.createTable('dragon_owners', table => {
      table.integer('dragon_id').references('dragons.id');
      table.integer('owner_id').references('knights.id');
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('dragon_owners');
  };
