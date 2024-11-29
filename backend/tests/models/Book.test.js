const mongoose = require('mongoose');
const Book = require('../../models/Book');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Book Model Test', () => {
  it('create & save book successfully', async () => {
    const validBook = new Book({
      title: 'Test Book',
      description: 'Test Description',
      author: 'Test Author',
      categories: 'Test Category',
      status: 'reading',
      userId: new mongoose.Types.ObjectId(),
    });
    const savedBook = await validBook.save();
    expect(savedBook._id).toBeDefined();
    expect(savedBook.title).toBe(validBook.title);
    expect(savedBook.description).toBe(validBook.description);
    expect(savedBook.author).toBe(validBook.author);
    expect(savedBook.categories).toBe(validBook.categories);
    expect(savedBook.status).toBe(validBook.status);
    expect(savedBook.userId).toBe(validBook.userId);
  });

  it('insert book successfully, but the field does not defined in schema should be undefined', async () => {
    const bookWithInvalidField = new Book({
      title: 'Test Book',
      description: 'Test Description',
      author: 'Test Author',
      categories: 'Test Category',
      status: 'reading',
      userId: new mongoose.Types.ObjectId(),
      extraField: 'This field is not defined in schema',
    });
    const savedBook = await bookWithInvalidField.save();
    expect(savedBook._id).toBeDefined();
    expect(savedBook.extraField).toBeUndefined();
  });

  it('create book without required field should fail', async () => {
    const bookWithoutRequiredField = new Book({ title: 'Test Book' });
    let err;
    try {
      const savedBookWithoutRequiredField = await bookWithoutRequiredField.save();
      error = savedBookWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.description).toBeDefined();
    expect(err.errors.author).toBeDefined();
    expect(err.errors.categories).toBeDefined();
    expect(err.errors.status).toBeDefined();
    expect(err.errors.userId).toBeDefined();
  });
});