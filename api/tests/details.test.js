const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const dataSet = require("./dataSets/dataSets.json");

const id = dataSet.details.id;

describe("Details Endpoint Test:", () => {
  it('GET /api/items/:id item details endpoint response', async (done) => {
    const response = await request.get(`/api/items/${id}`);
    // 200 OK
    expect(response.status).toBe(200);
    // item found
    expect(response.body.item.id).toBe(id);
    done();
  });
});
