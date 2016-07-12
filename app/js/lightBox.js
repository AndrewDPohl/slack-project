_readyState(function() {

  function startLightBox(event) {
    // Grab the image id
    var imageId = event.target.id;
    
    // Declare the instance of the item you want to reference
    var imageInstance = imageId - 1;

    // Set some variables for the information you want to render
    var thisImage = this.output.photoset.photo[imageInstance];
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
    bigPic.setAttribute("src", "https://farm" + farm + ".staticflickr.com/" + server + "/" + flickrId + "_" + flickrSecret + "_b.jpg");

    // Create a Paragraph tag with the title to be displayed on hover
    var title = document.createElement("P");
    var thumbTitle = document.createTextNode(thisImage.title);
    title.appendChild(thumbTitle);
    title.setAttribute("class", "imageTitle");
    title.setAttribute("id", "imageThumbTitle" + this.id);

    // Append the image
    document.getElementById('lightBox').appendChild(bigPic);
    document.getElementById('lightBox').appendChild(title);
    lbBg.style.display = "block";
    lb.style.display = "block";
    // console.log(imageId);
    // console.log(imageInstance);
    // console.log(farm);
    // console.log(flickrId);
    // console.log(flickrSecret);
  }

  function dismiss() {
    var lbBg = document.getElementById("lightBoxBg");
    var lb = document.getElementById("lightBox");
    var lbp = document.getElementById("lightBoxPic");
    var lbt = document.getElementById("imageThumbTitle" + this.id);
    lbBg.style.display = "none";
    lb.style.display = " none";
    lbp.parentNode.removeChild(lbp);
    lbt.parentNode.removeChild(lbt);
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;
});