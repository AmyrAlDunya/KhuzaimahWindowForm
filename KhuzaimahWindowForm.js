// Copyright(c) 2018 - Khuzaimah
// All rights reserved

function CreateWindowForm( name, htmlcontent, sty ) {
 document.write("<div id='" + name + "' style='" + sty + "'>" + htmlcontent + "<" + "/div>")
 document.getElementById( name ).style.position = "fixed";
 drag = new Object( );
 drag.obj = document.getElementById( name );

 drag.obj.addEventListener( 'mousedown', function( e ) {
  drag.top  = parseInt( drag.obj.offsetTop );
  drag.left = parseInt( drag.obj.offsetLeft );
  drag.oldx = drag.x;
  drag.oldy = drag.y;
  drag.drag = true;
 } );

 window.addEventListener( 'mouseup', function( ) {
  drag.drag = false;
 } );

 window.addEventListener( 'mousemove', function( e ) {
  drag.x = e.clientX;
  drag.y = e.clientY;
  var diffw = drag.x - drag.oldx;
  var diffh = drag.y - drag.oldy;

  if( drag.drag ) {
   drag.obj.style.left = drag.left + diffw + 'px';
   drag.obj.style.top  = drag.top  + diffh + 'px';
   e.preventDefault( );
  }
 } );
}