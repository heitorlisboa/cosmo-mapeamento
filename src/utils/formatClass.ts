export default function formatClass(className: string) {
  // Remove the leading and trailing white spaces and line breaks
  className = className.trim();
  // Splits the className
  let stringList = className.split(" ");
  // Trims each string in the list
  stringList = stringList.map((item) => item.trim());
  // Only get the strings that are not empty
  stringList = stringList.filter((item) => item);
  // Join and return the formatted className
  const formattedClassName = stringList.join(" ");
  return formattedClassName;
}
