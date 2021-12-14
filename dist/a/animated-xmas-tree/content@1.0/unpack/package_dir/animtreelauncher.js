var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.src = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*code by Paul Fleming, https://stackoverflow.com/questions/14032568/create-a-div-next-to-the-cursor-position-on-click */

$(function() {
     $("#draggabletree").draggable()
  $(document).click(function(e) {
  if(e.ctrlKey){

    var div = $('<div id="draggabletree">')
      .css({
        "left": e.pageX + 'px',
        "top": e.pageY + 'px',
        "position": 'absolute'
      })
      .append($('<img id="draggabletree" src="https://i.filmot.org/AY87ySe.gif" alt="myimage" />').draggable())
      .appendTo(document.body);






    }; }); });


