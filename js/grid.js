$(function(){
  drawGrid();
  drawGrid1();
})
function drawGrid(){
  var row = 1;
  var col = 1;
  var height = 0;
  var cnt = 4;
  if(window.innerWidth <= 480){
    cnt = 1;
  }else if(window.innerWidth <= 750){
    cnt = 2;
  }
  $('.grid_item').each(function(){
    //각 상자별 left 위치 계산
    //1열이면 0%, 2열이면 25%, 3열이면 50%, 4열이면 75%
    var left = (100 / cnt)*(col-1);
    
    $(this).css('left',left+'%');
    
    //hegiht를 계산하기 위한 과정
    var thisHeight = $(this).css('height');
    thisHeight = thisHeight.substr(0,thisHeight.length-2);
    var totalHeight = parseInt(thisHeight);
    //top을 계산
    if(row == 1){
      $(this).css('top',0);
    }else{
      //내 앞에 있는 박스의 번호
      var before = cnt*(row-2)-1+col;
      var beforeHeight1 = $('.grid_item').eq(before).css('height');
      var beforeHeight2 = beforeHeight1.substr(0,beforeHeight1.length-2);
      var beforeTop1 = $('.grid_item').eq(before).css('top');
      var beforeTop2 = beforeTop1.substr(0,beforeTop1.length-2);
      
      var top = parseInt(beforeHeight2)+parseInt(beforeTop2);
      $(this).css('top',top+'px');
      totalHeight = top + totalHeight;
    }
    if(height<totalHeight){
      height = totalHeight;
    }
    $('.grid').css('height',height+'px')
    col++;
    if(col == cnt+1){
      col = 1;
      row++;
    }
  })
}
function drawGrid1(){
  var row = 1;
  var col = 1;
  var height = 0;
  var cnt = 4;
  if(window.innerWidth <= 480){
    cnt = 1;
  }else if(window.innerWidth <= 750){
    cnt = 2;
  }
  $('.grid_item1').each(function(){
    //각 상자별 left 위치 계산
    //1열이면 0%, 2열이면 25%, 3열이면 50%, 4열이면 75%
    var left = (100 / cnt)*(col-1);
    
    $(this).css('left',left+'%');
    
    //hegiht를 계산하기 위한 과정
    var thisHeight = $(this).css('height');
    thisHeight = thisHeight.substr(0,thisHeight.length-2);
    var totalHeight = parseInt(thisHeight);
    //top을 계산
    if(row == 1){
      $(this).css('top',0);
    }else{
      //내 앞에 있는 박스의 번호
      var before = cnt*(row-2)-1+col;
      var beforeHeight1 = $('.grid_item1').eq(before).css('height');
      var beforeHeight2 = beforeHeight1.substr(0,beforeHeight1.length-2);
      var beforeTop1 = $('.grid_item1').eq(before).css('top');
      var beforeTop2 = beforeTop1.substr(0,beforeTop1.length-2);
      
      var top = parseInt(beforeHeight2)+parseInt(beforeTop2);
      $(this).css('top',top+'px');
      totalHeight = top + totalHeight;
    }
    if(height<totalHeight){
      height = totalHeight;
    }
    $('.grid1').css('height',height+'px')
    col++;
    if(col == cnt+1){
      col = 1;
      row++;
    }
  })
}