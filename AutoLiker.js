// ==UserScript==
// @name     AutoLike By Hash
// @version  1
// @grant    none
// ==/UserScript==
// @author   Thiagones Pereira


setTimeout(function(){
  
  // Get array of elements where there are images, by CSS class.
  // CSS classes may change.
  var divImg = document.getElementsByClassName("v1Nh3 kIKUG  _bz0w");

  // The number 9 indicates that its starts on the most recent content.
  // To start on the most relevant content, change it to 0.
  var whereToBegin = 9;
  
  // Get link elements from the image to start the likes.
  var linkImg = divImg[whereToBegin].getElementsByTagName("a");

  // Click event on the link to open the first media to be liked.
  eventFire(linkImg[0], 'click');

	// Variables to be used on media.
  var hearth = null;
  var arrow = null;
  var likedOrNot = null;
  var hearthClass = null;

  // Counter of likes already given. This is displayed in the console later.
  var count = 0;
  
  // This variable states how many likes to give.
  var howManyLikes = 850;

  // This variable states the minimum time (miliseconds) between likes.
  // Time varies randomly between minTime e (minTime + 10sec).
  var minTime = 5000;
  
  // This variable states time for next like.
  var nextLike = minTime;

  for (i = 0; i < howManyLikes; i++) {
    setTimeout(function(){

      // Get hearth element.
      hearth = document.getElementsByClassName("fr66n tiVCN");

      // Get hearth element that have the CSS class to check if it is already liked.
      likedOrNot = hearth[0].getElementsByTagName("span");

      // Get CSS class name string.
      hearthClass = likedOrNot[0].getAttribute("class");

      // Check if CSS class is the one that represents "Not Liked".
      // CSS classes may change.
      if(hearthClass == 'Szr5J coreSpriteHeartOpen '){   
        // Click event on the hearth link to like the media.
        eventFire(hearth[0], 'click');
      }

      // Get arrow element to go to the next media.
      // CSS classes may change.
      arrow = document.getElementsByClassName("HBoOv coreSpriteRightPaginationArrow");

      // Click arrow element .
      eventFire(arrow[0], 'click');

      // Count liked photos.
      count=count+1;

      // Display number of liked photos on console, with time for next like.
      console.log("Fotos com like: " + count + ". Time for next like: " + nextLike + " seconds.");

    },   nextLike);
    
    // Set time for next like.
    nextLike = nextLike + minTime + (Math.floor(Math.random()*10)*1000);
  }

}, 5000);

  
// Function to send onClick event of an element.
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}