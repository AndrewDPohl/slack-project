_readyState(function() {

  function startLightBox(event) {

    // Grab the image id
    var imageId = event.target.id;
    
    // Declare the instance of the item you want to reference
    var imageInstance = imageId - 1;
    var imageForward = imageInstance + 1;
    var imageBackward = imageInstance - 1;
    var imageNumberForward = imageInstance + 2;

    // Set some variables for the information you want to render
    var thisImage = this.output.photos.photo[imageInstance];
    var farm = thisImage.farm; 
    var server = thisImage.server;
    var flickrId = thisImage.id;
    var flickrSecret = thisImage.secret;

    // Set variable names for the lightbox elements to be affected
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");

    // Set variable for the image being created
    var bigPic = document.createElement("IMG");

    // Set attributes for the image
    bigPic.setAttribute("id", "lightBoxPic");
    bigPic.setAttribute("class", "bigPic");
    bigPic.setAttribute("src", allPics[imageInstance].image);

    // Create a Paragraph tag with the title
    var title = document.createElement("P");
    var thumbTitle = document.createTextNode(allPics[imageInstance].title);
    var nextTitle = document.createTextNode(allPics[imageForward].title);
    var prevTitle = document.createTextNode(allPics[imageBackward].title);
    title.appendChild(thumbTitle);
    title.setAttribute("class", "imageTitle");
    title.setAttribute("id", "imageThumbTitle");

    // Create a Paragraph tag with the number of the photo
    var imageNumber = document.createElement("P");
    var picNumber = document.createTextNode(imageId + " of 32");
    var nextImageNumber = document.createTextNode(imageNumberForward + " of 32");
    var prevImageNumber = document.createTextNode(imageInstance + " of 32");
    imageNumber.setAttribute("class", "imageNumber");
    imageNumber.setAttribute("id", "imageNumberId");
    imageNumber.appendChild(picNumber);

    // Create NEXT and PREV buttons for the LightBox
    var prev = document.createElement("DIV");
    var next = document.createElement("DIV");
    prev.setAttribute("id", "prevButton");
    prev.setAttribute("onclick", "previousPic()");
    next.setAttribute("id", "nextButton");
    next.setAttribute("onclick", "nextPic()");



    // Append the image
    document.getElementById("lightBox").appendChild(bigPic);
    document.getElementById("lightBox").appendChild(title);
    document.getElementById("lightBox").appendChild(prev);
    document.getElementById("lightBox").appendChild(next);
    document.getElementById("lightBox").appendChild(imageNumber);
    lightBoxBackground.style.display = "block";
    lightBoxImage.style.display = "block";

    function nextPic() {
      var firstPic = allPics[0].image;
      var lastPic = allPics[output.photos.photo.length - 1].image;
      var currentPic = allPics[imageInstance].image;
      var nextPic = allPics[imageForward].image;
      bigPic.setAttribute("src", nextPic);
      title.removeChild(thumbTitle);
      title.appendChild(nextTitle);
      imageNumber.removeChild(picNumber);
      imageNumber.appendChild(nextImageNumber);
    }

    function previousPic() {
      var firstPic = allPics[0].image;
      var lastPic = allPics[output.photos.photo.length - 1].image;
      var currentPic = allPics[imageInstance].image;
      var prevPic = allPics[imageBackward].image;
      bigPic.setAttribute("src", prevPic);
      title.removeChild(thumbTitle);
      title.appendChild(prevTitle);
      imageNumber.removeChild(picNumber);
      imageNumber.appendChild(prevImageNumber);
    }

    window.nextPic = nextPic;
    window.previousPic = previousPic;
    window.allPics = allPics;
  }

  function dismiss() {
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");
    var lightBoxPic = document.getElementById("lightBoxPic");
    var lightBoxTitle = document.getElementById("imageThumbTitle");
    var lightBoxNext = document.getElementById("nextButton");
    var lightBoxPrev = document.getElementById("prevButton");
    var lightBoxNumber = document.getElementById("imageNumberId");
    lightBoxBackground.style.display = "none";
    lightBoxImage.style.display = " none";
    lightBoxPic.parentNode.removeChild(lightBoxPic);
    lightBoxTitle.parentNode.removeChild(lightBoxTitle);
    lightBoxNext.parentNode.removeChild(lightBoxNext);
    lightBoxPrev.parentNode.removeChild(lightBoxPrev);
    lightBoxNumber.parentNode.removeChild(lightBoxNumber);
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;
  // window.nextPic = nextPic;
  // window.previousPic = previousPic;
});