const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const dataSet = require("./dataSets/dataSets.json");

const q = dataSet.search.q;
const len = dataSet.search.len;

describe("Search Endpoint Test:", () => {
  it('GET /api/items?q= item search endpoint response', async (done) => {
    const response = await request.get('/api/items').query({ q: q });
    // 200 Ok
    expect(response.status).toBe(200);
    // item quantity
    expect(response.body.items.length).toBe(len);
    done();
  });
});