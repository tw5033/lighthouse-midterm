
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders_foods', function (table) {
    table.increments();
    table.integer('quantity').unsigned();
    table.integer('ordersid').unsigned();
    table.integer('foodsid').unsigned();
    table.foreign('ordersid').references('id').inTable('orders');
    table.foreign('foodsid').references('id').inTable('foods');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders_foods');
};
