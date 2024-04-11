const request = require('supertest');

const createApp = require('../src/app');
const { config } = require('../src/config')
const { MongoClient } = require('mongodb')

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    database.dropDatabase(),
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {

      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'nicolas',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'nicolas',
        },
      ]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(body => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        })
    })
  })
});
