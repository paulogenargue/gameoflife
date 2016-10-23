function Grid(width, height){
  var _h = height;
  var _w = width;
  return {
    getHeight: function(){ return _h; },
    getWidth: function(){ return _w; }
  }
}

function getStatus(grid, x, y){
  var row = grid[x];
  return row && row[y] ? row[y] : 0;
}

function getNeighbourPosition(direction, x, y){
  if (direction == 'north'){
    return { x: x, y: y - 1 };
  } else if (direction == 'northeast'){
    return { x: x + 1, y: y -1 };
  } else if (direction == 'east'){
    return { x: x + 1, y: y };
  } else if (direction == 'southeast'){
    return { x: x + 1, y: y + 1 };
  } else if (direction == 'south'){
    return { x: x, y: y + 1 };
  } else if (direction == 'southwest'){
    return { x: x - 1, y: y + 1 };
  } else if (direction == 'west'){
    return { x: x - 1, y: y };
  } else if (direction == 'northwest'){
    return { x: x - 1, y: y -1 };
  }
}

function getLiveNeighbours(grid, x, y){
  var directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  var liveCount = 0;
  for (var i = 0; i < directions.length; i++){
    var pos = getNeighbourPosition(directions[i], x, y);
    if (getStatus(grid, pos.x, pos.y) == 1){
      liveCount++;
    }
  }
  return liveCount;
}

function determineFate(status, livingNeighbours){
  if ((livingNeighbours == 2 && status == 1) || livingNeighbours == 3){
    return 1;
  } else {
    return 0;
  }
}

function nextGen(current){
  var next = [];
  for (var i = 0; i < current.length; i++){
    next[i] = [];
    for (var j = 0; j < current[i].length; j++){
      var livingNeighbours = getLiveNeighbours(current, i, j);

      next[i][j] = determineFate(current[i][j], livingNeighbours);
    }
  }  
  return next;
}
