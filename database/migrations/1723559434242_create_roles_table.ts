import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'roles';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable();
      table.string('name').notNullable().unique();

      table.timestamp('created_at').notNullable();
      table.timestamp('updated_at').nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
