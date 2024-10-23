export function capitalizeFirstLetter(str: string): string {
  // just for example
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
