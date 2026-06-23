export function initials(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((chunk) => chunk[0].toUpperCase())
    .join("");
}
