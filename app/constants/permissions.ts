export const Permissions = {
  GenerateToken: 'generate_token',
} as const;

export type TypeFrom<T> = T[keyof T];
export type Permission = TypeFrom<typeof Permissions>;
