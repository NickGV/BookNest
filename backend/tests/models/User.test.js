const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
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

beforeEach(async () => {
  await User.deleteMany({});
});

describe('User Model Test', () => {
  it('create & save user successfully', async () => {
    const validUser = new User({
      username: 'testuser',
      email: 'testuser1@example.com',
      password: 'password123',
    });
    const savedUser = await validUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(validUser.username);
    expect(savedUser.email).toBe(validUser.email);
    const isPasswordMatch = await bcrypt.compare('password123', savedUser.password);
    expect(isPasswordMatch).toBe(true);
  });

  it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
    const userWithInvalidField = new User({
      username: 'testuser',
      email: 'testuser1@example.com',
      password: 'password123',
      extraField: 'This field is not defined in schema',
    });
    const savedUser = await userWithInvalidField.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.extraField).toBeUndefined();
  });

  it('create user without required field should fail', async () => {
    const userWithoutRequiredField = new User({ username: 'testuser' });
    let err;
    try {
      const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
      error = savedUserWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
    expect(err.errors.password).toBeDefined();
  });
});