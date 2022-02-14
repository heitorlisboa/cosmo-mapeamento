export default function isInList(
  searchTarget: any,
  listToSearch: any[]
): boolean {
  let result = false;

  listToSearch.forEach((item) => {
    if (item === searchTarget) result = true;
  });

  return result;
}
