import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { Permission } from 'adonis-lucid-permission/services/permission';
import { Role } from 'adonis-lucid-permission/services/role';
import { Roles } from '../../app/constants/roles.js';

export default class extends BaseSeeder {
  public async run() {
    const role = await Role.query().where('name', Roles.SuperAdmin).firstOrFail();
    const allPermimissions = await Permission.query().select('name');
    await role.syncPermissions(...allPermimissions);
  }
}
