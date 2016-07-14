_readyState(function() {

  function startLightBox(event) {

    // Grab the image id
    var imageId = event.target.id;
    var imageInstance = imageId-1;
    var imageBack = imageInstance-1;
    var imageForward = imageInstance+1;
    var firstImage = allPics[0].image;
    var lastInstance = Object.keys(allPics)[Object.keys(allPics).length-1];
    var lastNum = allPics[lastInstance].num;
    var lastImage = allPics[lastInstance].image;

    console.log("Starting Light Box");
    console.log(allPics);

    // Set variable names for the lightbox elements to be affected
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");

    // Set variable for the image being created
    var bigPic = document.createElement("DIV");
    var picTitle = document.createElement("P");
    var imageNum = document.createElement("P");

    // Set attributes for the image
    bigPic.setAttribute("id", imageInstance);
    bigPic.setAttribute("class", "bigPic");
    bigPic.setAttribute("style", "background-image: url(" + allPics[imageInstance].image + ");");
    picTitle.setAttribute("id", imageInstance);
    picTitle.setAttribute("class", "imageTitle");
    document.getElementById(imageInstance).innerHTML = allPics[imageInstance].title;

    document.getElementById("lightBox").appendChild(bigPic);
    document.getElementById("lightBox").appendChild(picTitle);
    // document.getElementById("lightBox").appendChild(imageNumber);
    lightBoxBackground.style.display = "block";
    lightBoxImage.style.display = "block";

    window.bigPic = bigPic;
    window.picTitle = picTitle;
    window.imageId = imageId;
    window.imageInstance = imageInstance;
    window.imageBack = imageBack;
    window.imageForward = imageForward;
    window.firstImage = firstImage;
    window.lastImage = lastImage;
    window.lastNum = lastNum;
  }

  function dismiss() {
    console.log("Dismissing Light Box");
    var lightBoxBackground = document.getElementById("lightBoxBg");
    var lightBoxImage = document.getElementById("lightBox");

    bigPic.parentNode.removeChild(bigPic);
    

    // lightBoxPic.parentNode.removeChild(lightBoxPic);

    lightBoxBackground.style.display = "none";
    lightBoxImage.style.display = " none";
  }

  window.startLightBox = startLightBox;
  window.dismiss = dismiss;

});