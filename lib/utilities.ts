const DONOTFORMAT = ["project-404"].map((category) => category.toLowerCase());

export function formatCategoryForDisplay(category: string): string {
  // Don't format certain categories
  if (DONOTFORMAT.includes(category.toLowerCase())) {
    return category;
  }

  return category
    .split("-") // Split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join back into a string
}

export function splitIntoWords(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle abbreviations
    .replace(/-/g, " ") // Replace hyphens with spaces
    .split(" ") // Split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join back into a string
}
