_readyState(function() {
  
  function loadXMLDoc() {
      
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET", "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=c4a1c9c293f61de168db06f6be812890&gallery_id=72157663354529069&per_page=20&format=json&nojsoncallback=1&api_sig=f29d84d9603883654ebab3cba30d6bf7", true);

      // Create a data structure for the image gallery
      var allPics = {};

      xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
              var rsp = xmlhttp.response;
              var type = xmlhttp.getResponseHeader("Content-Type");
              var output = JSON.parse(rsp);
              window.output = output;
              console.log(output);

              // Loop through the response and grab data to create to create
              // the larger version of the image, to be used later
              for (i = 0; i < output.photos.photo.length; i++) {
                var galImgId = i;
                var thisImage = output.photos.photo[galImgId];
                var galFarm = thisImage.farm; 
                var galServer = thisImage.server;
                var galFlickrId = thisImage.id;
                var galFlickrSecret = thisImage.secret;
                var galTitle = thisImage.title;
                var galImgSrc = "https://farm" + galFarm + ".staticflickr.com/" + galServer + "/" + galFlickrId + "_" + galFlickrSecret + "_b.jpg";
                allPics[i] = {image: galImgSrc, title: galTitle};
              }

              // Create then place the thumbnails
              for(i =0; i < output.photos.photo.length; i++) {

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
          }

          window.allPics = allPics;
      }
      xmlhttp.send();
  }

  loadXMLDoc();

});