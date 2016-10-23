function generateGrid(array){
  var html = '';
  for (var i = 0; i < array.length; i++){
    html += '<div class="row"></div>';
    for (var j = 0; j < array[i].length; j++){
      if (array[i][j] == 1){
        html += '<div class="cell alive"></div>';
      } else {
        html += '<div class="cell"></div>';
      }
    }
  }
  console.log($(html));
  return $(html);
}
