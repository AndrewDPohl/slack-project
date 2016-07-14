_readyState(function() {
  // Create a function for opening up the lightbox with the image you want to display
  function startLightBox(event) {

    // Grab the image id
    var imageId = event.target.id;
    
    // Declare the instance of the item you want to reference
    var imageInstance = imageId - 1;
    var imageForward = imageInstance + 1;
    var imageBackward = imageInstance - 1;

    // Set variables for the information you want to render
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

    // Create a Paragraph tag with the title to be displayed on hover
    var title = document.createElement("P");
    var thumbTitle = document.createTextNode(allPics[imageInstance].title);
    var nextTitle = document.createTextNode(allPics[imageForward].title);
    var prevTitle = document.createTextNode(allPics[imageBackward].title);
    title.appendChild(thumbTitle);
    title.setAttribute("class", "imageTitle");
    title.setAttribute("id", "imageThumbTitle");

    // Append the image
    document.getElementById('lightBox').appendChild(bigPic);
    document.getElementById('lightBox').appendChild(title);
    lightBoxBackground.style.display = "block";
    lightBoxImage.style.display = "block";

    function nextPic() {
      // var firstPic = allPics[0].image;
      // var lastPic = allPics[output.photos.photo.length - 1].image;
      // var currentPic = allPics[imageInstance].image;
      // var nextPic = allPics[imageForward].image;
      // bigPic.setAttribute("src", nextPic);
      // title.removeChild(thumbTitle);
      // title.appendChild(nextTitle);

      imageInstance = imageInstance + 1;
      var inst = allPics[imageInstance];
      inst.render(title, bigPic);
    }

    function previousPic() {
      // var firstPic = allPics[0].image;
      // var lastPic = allPics[output.photos.photo.length - 1].image;
      // var currentPic = allPics[imageInstance].image;
      // var prevPic = allPics[imageBackward].image;
      // bigPic.setAttribute("src", prevPic);
      // title.removeChild(thumbTitle);
      // title.appendChild(prevTitle);

      imageInstance = imageInstance - 1;
      var inst = allPics[imageInstance];
      inst.render(title, bigPic);
    }

    window.nextPic = nextPic;
    window.previousPic = previousPic;
  }

  function dismiss() {
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");
    var lightBoxPic = document.getElementById("lightBoxPic");
    var lightBoxTitle = document.getElementById("imageThumbTitle");
    lightBoxBackground.style.display = "none";
    lightBoxImage.style.display = " none";
    lightBoxPic.parentNode.removeChild(lightBoxPic);
    lightBoxTitle.parentNode.removeChild(lightBoxTitle);
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;
});