function generateEmptyGrid(l, w){
  var grid = [];
  for (var i = 0; i < l; i++){
    grid[i] = [];
    for (var j = 0; j < w; j++){
      grid[i][j] = 0;
    }
  }
  return grid;
}

function generateHtml(array){
  var html = '<div class="grid">';
  for (var i = 0; i < array.length; i++){
    html += '<div class="row">';
    for (var j = 0; j < array[i].length; j++){
      if (array[i][j] == 1){
        html += '<div class="cell alive"></div>';
      } else {
        html += '<div class="cell"></div>';
      }
    }
    html += '</div>';
  }
  html += '</div>';
  return $(html);
}

function extractGrid(html){
  var grid = [];
  html.find('.row').each(function(i, el){
    grid[i] = [];
    $(el).find('.cell').each(function(j, el2){
      grid[i][j] = $(el2).hasClass('alive') ? 1 : 0;
    });
  });
  return grid;
}

function attachClickHandler(html){
  html.on('click', function(e){
    var target = $(e.target);
    if (target.hasClass('cell')){
      target.toggleClass('alive');
    }
  });
}


jQuery(function($){
  $('#generate').click(function(){
    var l = Number($('#length').val());
    var w = Number($('#width').val());
    var emptyGrid = generateEmptyGrid(l, w);
    var html = generateHtml(emptyGrid);
    attachClickHandler(html);
    html.appendTo('.board');
  });

  $('#start').click(function(){
    $('.grid').off('click');
    setInterval(function(){
      var grid = extractGrid($('.grid'));
      var next = nextGen(grid);
      var html = generateHtml(next);
      $('.grid').remove();
      html.appendTo('.board');
    }, 1000);
  });

  $("#help").click(function(){
    var msg =
      '1. Enter size of grid\n' +
      '2. Click Generate\n' +
      '3. Click on cells you want to live.\n' +
      '4. Start\n'+
      'To reset, refresh page.'
      alert(msg);
  });
});
