// Get the base API URL (from .env or fallback to localhost)
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

// -------------------- BLOG --------------------
export async function getBlogPosts() {
  const res = await fetch(`${API_BASE}/api/blog/posts/`);
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  return await res.json();
}

// -------------------- FAQ --------------------
export async function getFaqCategories() {
  const res = await fetch(`${API_BASE}/api/faq/categories/`);
  if (!res.ok) throw new Error("Failed to fetch FAQ categories");
  return await res.json();
}

// -------------------- REVIEWS --------------------
export async function getReviews() {
  const res = await fetch(`${API_BASE}/api/reviews/reviews`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return await res.json();
}
