_readyState(function() {
  
  function loadXMLDoc() {
      
      // Set a variable for the API call
      var xmlhttp = new XMLHttpRequest();

      // Open the API call
      xmlhttp.open("GET", " https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=b43677ae1b84e15997d4f5134df88173&gallery_id=72157663354529069&format=json&nojsoncallback=1", true);

      // Create a data structure for the image gallery
      // var allPics = {};

      var allPics = [];

      function GalleryImage(src, title, num) {
        this.image = src;
        this.title = title;
        this.num = num;
      }

      // title {DomNode} The P tag that we're going to change on render
      // container {DOMNode} The domnode to render into
      GalleryImage.prototype.render = function render(title, imgContainer) {
        // In here you put your DOM manipulation code to actually
        // go about replacing the image in the lightbox with this image

        imgContainer.setAttribute('src', this.image);
        title.innerText = this.title;
      }

      GalleryImage.prototype.thumbRender = function thumbRender() {
        // Code to generate and add a thumbnail to the dom

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
          console.log(output);

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

            var currentGalleryImage = new GalleryImage(galImgSrc, galTitle, galImgNum);
            allPics.push(currentGalleryImage);

            

            currentGalleryImage.thumbRender();
          }
        }
        
        window.allPics = allPics;

      }
      
      xmlhttp.send();
  }

  loadXMLDoc();

});