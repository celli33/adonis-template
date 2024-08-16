import { AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import { compose } from '@adonisjs/core/helpers';
import hash from '@adonisjs/core/services/hash';
import { BaseModel, column } from '@adonisjs/lucid/orm';
import { withAuthorizable } from 'adonis-lucid-permission';
import { DateTime } from 'luxon';

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
});

const HasAuthorizable = withAuthorizable({
  rolesPivotTable: 'user_has_roles',
  permissionsPivotTable: 'user_has_permissions',
});

export default class User extends compose(BaseModel, AuthFinder, HasAuthorizable) {
  @column({ isPrimary: true })
  public declare id: number;

  @column()
  public declare fullName: string;

  @column()
  public declare email: string;

  @column({ serializeAs: null })
  public declare password: string;

  @column.dateTime({ autoCreate: true })
  public declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public declare updatedAt: DateTime | null;

  public static accessTokens = DbAccessTokensProvider.forModel(User);

  public static currentAccessToken?: AccessToken;
}
