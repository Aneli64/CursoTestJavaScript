var BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('should return a list book', () => {
    const books = service.getBooks();
    console.log(books);
    expect(books.length).toEqual();
    })
});
});
