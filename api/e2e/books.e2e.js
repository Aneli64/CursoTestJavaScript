const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../fakes/book.fake');

var mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  })

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      return request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(body => {
        console.log(body);
        expect(body.length).toEqual(1);
      })
    })
  })
});
