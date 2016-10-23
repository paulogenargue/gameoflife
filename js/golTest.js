QUnit.test( "Grid can be initialized with height and width.", function( assert ) {
  var grid = new Grid(3, 4);
  assert.equal(grid.getWidth(), 3);
  assert.equal(grid.getHeight(), 4);
  console.log(grid.getWidth());
});

QUnit.test('Must be able to determine if a cell is dead or a live', function(assert) {
  var current = [[1, 0]];

  assert.equal(getStatus(current, 0, 0), 1, 'Living cell');
  assert.equal(getStatus(current, 0, 1), 0, 'Dead cell');
  // Test out of bounds
  assert.equal(getStatus(current, -1, 0), 0);
  assert.equal(getStatus(current, 0, -1), 0);
  assert.equal(getStatus(current, 2, 0), 0);
  assert.equal(getStatus(current, 0, 2), 0);
});

QUnit.test('Must be able to get the position of a neighbour based on direction', function(assert) {
  assert.propEqual(getNeighbourPosition('north', 0, 0), { x: 0, y: -1 }, 'North neighbour');
  assert.propEqual(getNeighbourPosition('northeast', 0, 0), { x: 1, y: -1 }, 'Northeast neighbour');
  assert.propEqual(getNeighbourPosition('east', 0, 0), {x: 1, y: 0 }, 'East neighbour');
  assert.propEqual(getNeighbourPosition('southeast', 0, 0), { x: 1, y: 1 }, 'Southeast neighbour');
  assert.propEqual(getNeighbourPosition('south', 0, 0), { x: 0, y: 1 }, 'South neighbour');
  assert.propEqual(getNeighbourPosition('southwest', 0, 0), { x: -1, y: 1 }, 'Southwest neighbour');
  assert.propEqual(getNeighbourPosition('west', 0, 0), { x: -1, y: 0 }, 'West neighbour');
  assert.propEqual(getNeighbourPosition('northwest', 0, 0), { x: -1, y: -1 }, 'Northwest neighbour');
});

QUnit.test('Must be able to determine live neighbors based on coordinates in the grid', function(assert) {
  var current = [
    [1,0,0],
    [0,1,0],
    [1,1,0]
  ];

  assert.equal(getLiveNeighbours(current, 1, 1), 3);
  assert.equal(getLiveNeighbours(current, 0, 0), 1);
});

QUnit.test('Living cell must die if living neighbors is less than 2', function(assert){
  assert.equal(determineFate(1, 1), 0);
  assert.equal(determineFate(1, 0), 0);
});

QUnit.test('Living cell must live if living neighbors is 2 or 3', function(assert){
  assert.equal(determineFate(1, 2), 1);
  assert.equal(determineFate(1, 3), 1);
});

QUnit.test('Living cell must die if living neighbors is more than 3', function(assert){
  assert.equal(determineFate(1, 4), 0);
  assert.equal(determineFate(1, 5), 0);
});

QUnit.test('Dead cell must live if living neighbors is exactly 3', function(assert){
  assert.equal(determineFate(0, 2), 0);
  assert.equal(determineFate(0, 3), 1);
  assert.equal(determineFate(0, 4), 0);
});

QUnit.test('Must be able to generate next generation based on current generation of cells', function(assert){
  var current = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ];
  var next = nextGen(current);
  assert.equal(next.length, current.length);
  assert.equal(next[0].length, current[0].length);
});
