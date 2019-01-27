exports.up = knex => {
    return knex.schema.createTable('knights', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.integer('profile_image_id').references('images.id');
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('knights');
  };
