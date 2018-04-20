import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choosing Sides';
}


var side = localStorage.hand
if (side == "left") {
  document.getElementById("direction").className = "lhd";
}

window.addEventListener('load', function(){
 
    var direction = document.getElementById('direction')
    var statusdiv = document.getElementById('statusdiv')
    var starty = 0
    // var dist = 0
 
    direction.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        starty = touchobj.clientY // get y position of touch point relative to top edge of browser
        // statusdiv.innerHTML = 'Status: touchstart<br> ClientY: ' + starty + 'px'
        // e.preventDefault()
    }, false)
 
    // direction.addEventListener('touchmove', function(e){
    //     var touchobj = e.changedTouches[0] // reference first touch point for this event
    //     var dist = Math.abs(starty - parseInt(touchobj.clientY))
    //     statusdiv.innerHTML = 'Distance: vertical distance traveled: ' + dist + 'px'
    //     e.preventDefault()
    // }, false)
 
    // direction.addEventListener('touchend', function(e){
    //     var touchobj = e.changedTouches[0] // reference first touch point for this event
    //     yEnd.innerHTML = 'Final Y: ' + touchobj.clientY + 'px'
    //     e.preventDefault()
    // }, false)
 
    direction.addEventListener('touchmove', function(e){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        var mid = w/2
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = Math.abs(starty - touchobj.clientY)
        var x = touchobj.clientX
        statusdiv.innerHTML = 'Vertical distance: ' + dist + 'px'
        // xEnd.innerHTML = 'Final X: ' + x + 'px'
        // e.preventDefault()
        if(x > mid && dist > 75){
          document.getElementById("direction").className = "rhd";
          sessionStorage.setItem('hand', 'right');

        } else if(x < mid && dist > 75){
          document.getElementById("direction").className = "lhd";
          sessionStorage.setItem('hand', 'left');

        } else {
          console.log("relax, it's just a click")
        }
    }, false)
}, false)