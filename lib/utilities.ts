const DONOTFORMAT = ["project-404"].map((category) => category.toLowerCase());

export function formatCategoryForDisplay(category: string): string {
  if (DONOTFORMAT.includes(category.toLowerCase())) {
    return category;
  }

  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
