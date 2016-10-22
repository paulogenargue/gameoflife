function Grid(width, height){
  var _h = height;
  var _w = width;
  return {
    getHeight: function(){ return _h; },
    getWidth: function(){ return _w; }
  }
}
