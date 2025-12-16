import { filterMovies } from "../../src/services/recommendationService.js";

describe("filterMovies", () => {
  test("returns an array", () => {
    const result = filterMovies({});
    expect(Array.isArray(result)).toBe(true);
  });

  test("sorts results by rating (desc)", () => {
    const result = filterMovies({});
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].rating).toBeGreaterThanOrEqual(result[i + 1].rating);
    }
  });
});
