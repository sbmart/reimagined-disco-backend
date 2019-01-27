
exports.up = knex => {
    return knex.schema.createTable('dragon_images', table => {
      table.integer('dragon_id').references('dragons.id');
      table.integer('image_id').references('images.id');
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('dragon_images');
  };
