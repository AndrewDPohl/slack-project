_readyState(function() {
  
  function loadXMLDoc() {
      
      // Set a variable for the API call
      var xmlhttp = new XMLHttpRequest();

      // Open the API call
      xmlhttp.open("GET", " https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=b43677ae1b84e15997d4f5134df88173&gallery_id=72157663354529069&format=json&nojsoncallback=1", true);

      // Set up an array to store 
      var allPics = [];

      // Constructor for a GalleryImage
      function GalleryImage(src, title, num) {
        this.image = src;
        this.title = title;
        this.num = num;
      }

      // Method that will be used within the Next and Previous functions
      // to change the image, title, and number of the lightbox accordingly
      GalleryImage.prototype.render = function render(title, imgContainer, picNum) {

        imgContainer.setAttribute('src', this.image);
        title.innerText = this.title;
        picNum.innerText = "Image " + this.num + " of " + allPics.length;
      }

      // Code to generate and add a thumbnail to the dom
      GalleryImage.prototype.thumbRender = function thumbRender() {

        // Create a DIV which will house the entire thumbnail
        var thumb = document.createElement("DIV");
        thumb.setAttribute("class", "thumbnail");

        // Create an Image tag which will have the thumbnail from Flickr
        var img = document.createElement("IMG");
        img.setAttribute("src", "https://farm" + output.photos.photo[i].farm + ".staticflickr.com/" + output.photos.photo[i].server + "/" + output.photos.photo[i].id + "_" + output.photos.photo[i].secret + "_q.jpg");
        img.setAttribute("width", "195px");
        img.setAttribute("alt", output.photos.photo[i].title);
        img.setAttribute("class", "image-thumb");
        img.setAttribute("id", i + 1);
        img.setAttribute("onclick", "startLightBox(event)");

        // Append the image thumbnail to the page
        document.getElementById('main-content-container').appendChild(thumb);
        thumb.appendChild(img);
      }

      // Make the API call
      xmlhttp.onreadystatechange = function(){
        // Check that the Call is complete and that it was a success
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          // Grab the response data, parse it and set it up to be accessible
          var rsp = xmlhttp.response;
          var type = xmlhttp.getResponseHeader("Content-Type");
          var output = JSON.parse(rsp);
          window.output = output;

          // Loop through the response and grab data to create to create
          // the larger version of the image, to be used later
          for (i = 0; i < output.photos.photo.length; i++) {

            // Set up and create the object that holds information for the
            // larger versions of the photos
            var galImgId = i;
            var galImgNum = i + 1;
            var thisImage = output.photos.photo[galImgId];
            var galFarm = thisImage.farm; 
            var galServer = thisImage.server;
            var galFlickrId = thisImage.id;
            var galFlickrSecret = thisImage.secret;
            var galTitle = thisImage.title;
            var galImgSrc = "https://farm" + galFarm + ".staticflickr.com/" + galServer + "/" + galFlickrId + "_" + galFlickrSecret + "_b.jpg";

            // Define what each new GalleryImage is and what it includes
            var currentGalleryImage = new GalleryImage(galImgSrc, galTitle, galImgNum);

            // Add every newly created GalleryImage to the array - allPics
            allPics.push(currentGalleryImage);

            
            // Call method to render all of the thumbs onto the page
            currentGalleryImage.thumbRender();
          }
        }
        
        // Make the allPics array accessible in the window
        window.allPics = allPics;

      }
      
      // Make the XMLHTTP call
      xmlhttp.send();
  }

  // Load all of the functionality
  loadXMLDoc();

});