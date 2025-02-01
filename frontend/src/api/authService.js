const API_URL = "https://booknest-production-e0ee.up.railway.app";

export const verifyToken = async (token) => {
  const response = await fetch(`${API_URL}/auth/verify-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to verify token");
  }
  return response.json();
};