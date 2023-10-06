export enum FontWeight {
  BOLD = 700,
  SEMI_BOLD = 600,
  MEDIUM = 500,
  REGULAR = 400,
  LIGHT = 300,
}

export enum DatatableFilters {
  IncludesString = "includesString",
  /**
   * @deprecated no backend support for now
   */
  IncludesStringSensitive = "includesStringSensitive",
  /**
   * @deprecated no backend support for now
   */
  EqualsString = "equalsString",
  /**
   * @deprecated no backend support for now
   */
  EqualsStringSensitive = "equalsStringSensitive",
  ArrIncludes = "arrIncludes",
  /**
   * @deprecated no backend support for now
   */
  ArrIncludesAll = "arrIncludesAll",
  /**
   * @deprecated no backend support for now
   */
  ArrIncludesSome = "arrIncludesSome",
  Equals = "equals",
  WeakEquals = "weakEquals",
  GreaterOrEqual = "greaterOrEqual",
  LessOrEqual = "lessOrEqual",
  NotIn = "notIn",
  NotEqual = "notEquals",
}

export enum DatatableFilterFields {
  Select = "select",
}
