QUnit.test('Must be able to generate html markup given a 2d grid', function(assert){
  var array = [
    [0, 0],
    [0, 0]
  ];
  var grid = generateGrid(array);
  assert.ok(grid instanceof jQuery);
  assert.equal(grid.filter('.row').length, 2);
  assert.equal(grid.filter('.cell').length, 4);
});

QUnit.test('Must be able to identify living cells from generated html markup', function(assert){
  var array = [
    [1, 0],
    [0, 0]
  ];
  var grid = generateGrid(array);
  assert.ok(grid instanceof jQuery);
  assert.equal(grid.filter('.alive').length, 1)
});
