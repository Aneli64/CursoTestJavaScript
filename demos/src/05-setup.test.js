describe('Set', () => {
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('other group', () => {
  test('case 3', () => {
    console.log('case 3');
    expect(1 + 4).toBe(5);
  });
  test('case 4', () => {
    console.log('case 4');
    expect(1+ 5).toBe(6);
    });
  });
});
