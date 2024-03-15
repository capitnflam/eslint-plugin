export type RecordValueType<
  T extends Record<K, unknown> | undefined,
  K extends string | number | symbol = string,
> = Exclude<T, undefined>[K]
