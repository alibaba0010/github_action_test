// mathOperations.test.js

const { add, subtract } = require('./index');

// This will run before all tests in this suite
beforeAll(() => {
  console.log('Starting math operations tests...');
});

// This will run after all tests in this suite
afterAll(() => {
  console.log('Finished math operations tests...');
});

describe('Math Operations', () => {
  it('should add two numbers correctly', () => {
    expect(add(3, 5)).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  // You can add more test cases here
});
