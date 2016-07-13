_readyState(function() {

  function startLightBox(event) {

    // Grab the image id
    var imageId = event.target.id;
    
    // Declare the instance of the item you want to reference
    var imageInstance = imageId - 1;
    var imageForward = imageInstance + 1;
    var imageBackward = imageInstance - 1;

    // Set some variables for the information you want to render
    var thisImage = this.output.photos.photo[imageInstance];
    var farm = thisImage.farm; 
    var server = thisImage.server;
    var flickrId = thisImage.id;
    var flickrSecret = thisImage.secret;

    // Set variable names for the lightbox elements to be affected
    var lbBg = document.getElementById("lightBoxBg");
    var lb = document.getElementById("lightBox");

    // Set variable for the image being created
    var bigPic = document.createElement("IMG");

    // Set attributes for the image
    bigPic.setAttribute("id", "lightBoxPic");
    bigPic.setAttribute("class", "bigPic");
    bigPic.setAttribute("src", allPics[imageInstance].image);

    // Create a Paragraph tag with the title to be displayed on hover
    var title = document.createElement("P");
    var thumbTitle = document.createTextNode(allPics[imageInstance].title);
    var nextTitle = document.createTextNode(allPics[imageForward].title);
    var prevTitle = document.createTextNode(allPics[imageBackward].title);
    title.appendChild(thumbTitle);
    title.setAttribute("class", "imageTitle");
    title.setAttribute("id", "imageThumbTitle");

    // Create NEXT and PREV buttons for the LightBox
    var prev = document.createElement("P");
    var next = document.createElement("P");
    prev.setAttribute("id", "prevButton");
    prev.setAttribute("onclick", "previousPic()");
    next.setAttribute("id", "nextButton");
    next.setAttribute("onclick", "nextPic()");



    // Append the image
    document.getElementById('lightBox').appendChild(bigPic);
    document.getElementById('lightBox').appendChild(title);
    document.getElementById('lightBox').appendChild(prev);
    document.getElementById('lightBox').appendChild(next);
    lbBg.style.display = "block";
    lb.style.display = "block";

    function nextPic() {
      var firstPic = allPics[0].image;
      var lastPic = allPics[output.photos.photo.length - 1].image;
      var currentPic = allPics[imageInstance].image;
      var nextPic = allPics[imageForward].image;
      console.log("The first pic is " + firstPic);
      console.log("The last pic is " + lastPic);
      console.log("The current pic is " + currentPic);
      console.log("The next pic is " + nextPic);
      bigPic.setAttribute("src", nextPic);
      title.removeChild(thumbTitle);
      title.appendChild(nextTitle);
    }

    function previousPic() {
      var firstPic = allPics[0].image;
      var lastPic = allPics[output.photos.photo.length - 1].image;
      var currentPic = allPics[imageInstance].image;
      var prevPic = allPics[imageBackward].image;
      console.log("The first pic is " + firstPic);
      console.log("The last pic is " + lastPic);
      console.log("The current pic is " + currentPic);
      console.log("The previous pic is " + prevPic);
      bigPic.setAttribute("src", prevPic);
      title.removeChild(thumbTitle);
      title.appendChild(prevTitle);
    }

    window.nextPic = nextPic;
    window.previousPic = previousPic;
    window.allPics = allPics;
  }

  function dismiss() {
    var lbBg = document.getElementById("lightBoxBg");
    var lb = document.getElementById("lightBox");
    var lbp = document.getElementById("lightBoxPic");
    var lbt = document.getElementById("imageThumbTitle");
    var lbNext = document.getElementById("nextButton");
    var lbPrev = document.getElementById("prevButton");
    lbBg.style.display = "none";
    lb.style.display = " none";
    lbp.parentNode.removeChild(lbp);
    lbt.parentNode.removeChild(lbt);
    lbNext.parentNode.removeChild(lbNext);
    lbPrev.parentNode.removeChild(lbPrev);
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;
  // window.nextPic = nextPic;
  // window.previousPic = previousPic;
});