import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { Role } from 'adonis-lucid-permission/services/role';
import { Roles } from '../../app/constants/roles.js';

export default class extends BaseSeeder {
  public async run() {
    const mapedRoles = Object.values(Roles).map((item) => {
      return { name: item };
    });
    await Role.createMany(mapedRoles);
  }
}
