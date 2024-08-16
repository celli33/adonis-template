import app from '@adonisjs/core/services/app';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { UserFactory } from '#database/factories/user_factory';
import { Roles } from '../../app/constants/roles.js';

export default class extends BaseSeeder {
  public async run() {
    if (app.inProduction) {
      return;
    }
    const user = await UserFactory.merge({
      email: 'admin@example.com',
    }).create();
    await user.syncRoles(Roles.SuperAdmin);
  }
}
