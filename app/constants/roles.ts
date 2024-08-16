export const Roles = {
  SuperAdmin: 'super_admin',
} as const;

export type TypeFrom<T> = T[keyof T];
export type Role = TypeFrom<typeof Roles>;
