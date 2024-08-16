import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class IndexSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run(): Promise<void> {
    await this.seed(await import('#database/seeders/permissions_table_seeder'));
    await this.seed(await import('#database/seeders/roles_table_seeder'));
    await this.seed(await import('#database/seeders/roles_permissions_table_seeder'));
    await this.seed(await import('#database/seeders/users_table_seeder'));
  }
}
