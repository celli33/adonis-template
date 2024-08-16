import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { Permission } from 'adonis-lucid-permission/services/permission';
import { Permissions } from '../../app/constants/permissions.js';

export default class extends BaseSeeder {
  public async run() {
    const mapedRoles = Object.values(Permissions).map((item) => {
      return { name: item };
    });
    await Permission.createMany(mapedRoles);
  }
}
