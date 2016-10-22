QUnit.test( "Grid can be initialized with height and width.", function( assert ) {
  var grid = new Grid(3, 4);
  assert.equal(grid.getWidth(), 3);
  assert.equal(grid.getHeight(), 4);
  console.log(grid.getWidth());
});

// QUnit.test('Grid can')
