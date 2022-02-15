function objectHasItems<T extends object>(object: object): object is T {
  return Object.keys(object).length > 0;
}

export default objectHasItems;
