import { verifyToken } from "../../src/api/authService";

describe("authService", () => {
  describe("verifyToken", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("should verify token successfully", async () => {
      const mockToken = "mockToken";
      const mockResponse = { valid: true };

      fetch.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await verifyToken(mockToken);

      expect(result).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/auth/verify-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mockToken}`,
        },
      });
    });

    it("should throw an error if token verification fails", async () => {
      const mockToken = "mockToken";

      fetch.mockResponseOnce(JSON.stringify({}), { status: 401 });

      await expect(verifyToken(mockToken)).rejects.toThrow("Failed to verify token");
    });
  });
});