QUnit.test('Must be able to generate html markup given a 2d array', function(assert){
  var array = [
    [0, 0],
    [0, 0]
  ];
  var grid = generateHtml(array);
  assert.ok(grid instanceof jQuery);
  assert.equal(grid.find('.row').length, 2);
  assert.equal(grid.find('.cell').length, 4);
});

QUnit.test('Must be able to identify living cells from generated html markup', function(assert){
  var array = [
    [1, 0],
    [0, 0]
  ];
  var grid = generateHtml(array);
  assert.ok(grid instanceof jQuery);
  assert.equal(grid.find('.alive').length, 1)
});

QUnit.test('Must be able to generate 2d array from html markup', function(assert){
  var html =
    '<div class="grid">' +
      '<div class="row">' +
        '<div class="cell"></div>' +
        '<div class="cell"></div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="cell alive"></div>' +
        '<div class="cell alive"></div>' +
      '</div>' +
    '</div>';

    var grid = extractGrid($(html));
    assert.equal(grid.length, 2);
    assert.equal(grid[0].length, 2);
    assert.equal(grid[1].length, 2);
    assert.equal(grid[1][0], 1);
    assert.equal(grid[1][1], 1);
});


QUnit.test('Clicking a cell must toggle its life and death.', function(assert){
  var array = [[0]];
  var grid = generateHtml(array);
  attachClickHandler(grid);
  grid.find('.cell').trigger('click');
  assert.equal(grid.find('.alive').length, 1);
  grid.find('.cell').trigger('click');
  assert.equal(grid.find('.alive').length, 0);
});
