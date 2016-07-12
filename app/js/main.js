_readyState(function() {
  
  function loadXMLDoc() {
      
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET", " https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=ee9186c94164b96ca1d737d22bb19d4b&photoset_id=72157669819437490&user_id=142129438%40N03&per_page=20&format=json&nojsoncallback=1&auth_token=72157670276358121-93096b70ac47e6e2&api_sig=74d0b36fc94e1179ba113772a040c85c", true);
      
      xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
              var rsp = xmlhttp.response;
              var type = xmlhttp.getResponseHeader("Content-Type");
              var output = JSON.parse(rsp);
              window.output = output;
              console.log(output);

              for(i =0; i < output.photoset.photo.length; i++) {

                // Create a DIV which will house the entire thumbnail
                var thumb = document.createElement("DIV");
                thumb.setAttribute("class", "thumbnail");

                // Create an Image tag which will have the thumbnail from Flickr
                var img = document.createElement("IMG");
                img.setAttribute("src", "https://farm" + output.photoset.photo[i].farm + ".staticflickr.com/" + output.photoset.photo[i].server + "/" + output.photoset.photo[i].id + "_" + output.photoset.photo[i].secret + "_q.jpg");
                img.setAttribute("width", "145px");
                img.setAttribute("alt", output.photoset.photo[i].title);
                img.setAttribute("class", "image-thumb");
                img.setAttribute("id", i + 1);
                img.setAttribute("onclick", "startLightBox(event)");

                // // Create a Paragraph tag with the title to be displayed on hover
                // var title = document.createElement("P");
                // var thumbTitle = document.createTextNode(output.photoset.photo[i].title);
                // title.appendChild(thumbTitle);
                // title.setAttribute("class", "image-thumb-title");

                // // Append the image thumbnail to the page
                document.getElementById('main-content-container').appendChild(thumb);
                thumb.appendChild(img);
                // thumb.appendChild(title);

              }
          }
      }
      xmlhttp.send();
  }

  loadXMLDoc();





// img.setAttribute("src", "https://www.flickr.com/photos/flickr/galleries/72157663354529069/with/" + output.photoset.photo[i].id + "#photo_" +output.photoset.photo[i].id);

// img.setAttribute("src", "https://www.flickr.com/photos/" + output.photoset.owner + "/" + output.photoset.photo[i].id + "/in/album-" + output.photoset.id + "/");

// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
//        if (xmlhttp.status == 200) {
//            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//        }
//        else if (xmlhttp.status == 400) {
//           console.log('There was an error 400');
//        }
//        else {
//            console.log('something else other than 200 was returned');
//        }
//     }
// };


// // Not currently working 
// function startLightBox() {
//   var lbBg = document.getElementById("lightBoxBg");
//   var lb = document.getElementById("lightBox");
//   var bigPic = document.createElement("IMG");
//   bigPic.setAttribute("src", "https://farm" + output.photoset.photo[i].farm + ".staticflickr.com/" + output.photoset.photo[i].server + "/" + output.photoset.photo[i].id + "_" + output.photoset.photo[i].secret + "_q.jpg");
//   document.getElementById('lightBox').appendChild(bigPic);


//   lbBg.style.display = "block";
//   lb.style.display = "block";

// }

// function dismiss() {
//   var lbBg = document.getElementById("lightBoxBg");
//   var lb = document.getElementById("lightBox");
//   lbBg.style.display = "none";
//   lb.style.display = " none";
// }

});