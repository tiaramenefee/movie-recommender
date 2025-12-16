import request from "supertest";
import app from "../../src/app.js";

describe("Movies API", () => {
  test("GET /movies returns an array", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /movies/:id returns 404 for unknown id", async () => {
    const res = await request(app).get("/movies/not-a-real-id");
    expect(res.statusCode).toBe(404);
  });
});

