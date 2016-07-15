_readyState(function() {
  
  // Create a function for opening up the lightbox with the image you want to display
  function startLightBox(event) {

    // Grab the image id
    var imageId = event.target.id;
    
    // Declare the instance of the item you want to reference
    var imageInstance = imageId - 1;

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
    title.appendChild(thumbTitle);
    title.setAttribute("class", "imageTitle");
    title.setAttribute("id", "imageThumbTitle");

    // Create a Paragraph tag with the number of the image being displayed
    var picNum = document.createElement("P");
    var thumbNumber = document.createTextNode("Image " + allPics[imageInstance].num + " of " + allPics.length);
    picNum.appendChild(thumbNumber);
    picNum.setAttribute("class", "imageNumber");
    picNum.setAttribute("id", "imageNumberId");

    // Append the image
    document.getElementById('lightBox').appendChild(bigPic);
    document.getElementById('lightBox').appendChild(title);
    document.getElementById('lightBox').appendChild(picNum);
    lightBoxBackground.style.display = "block";
    lightBoxImage.style.display = "block";

    // Create a function that will change the bigPic to the next instance of GalleryImage
    //  and the title to the next Title
    function nextPic() {
      // Account for the last image, and make sure it moves to the first,
      //  else just move to the next
      if (imageInstance === allPics.length - 1) {
        imageInstance = 0;
      } else {
        imageInstance = imageInstance + 1;
      }
      var inst = allPics[imageInstance];
      inst.render(title, bigPic, picNum);
    }

    // Create a function that will change the bigPic to the previous instance of Gallery Image
    //  and the title to the previous Title
    function previousPic() {
      // Account for the first image, and make sure it moves to the last,
      //  else just move to the previous
      if (imageInstance === 0) {
        imageInstance = allPics.length - 1;
      } else {
        imageInstance = imageInstance - 1;
      }
      var inst = allPics[imageInstance];
      inst.render(title, bigPic, picNum);
    }

    window.nextPic = nextPic;
    window.previousPic = previousPic;
  }

  // Function to exit out of the lightbox, which will remove the created Nodes for
  //  the Image and Title
  function dismiss() {
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");
    var lightBoxPic = document.getElementById("lightBoxPic");
    var lightBoxTitle = document.getElementById("imageThumbTitle");
    var lightBoxNum = document.getElementById("imageNumberId");
    lightBoxBackground.style.display = "none";
    lightBoxImage.style.display = " none";
    lightBoxPic.parentNode.removeChild(lightBoxPic);
    lightBoxTitle.parentNode.removeChild(lightBoxTitle);
    lightBoxNum.parentNode.removeChild(lightBoxNum);
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;
});