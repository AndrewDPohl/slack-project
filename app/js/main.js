function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=735173d520e0cb31932c37536f25f57a&photoset_id=72157669819437490&user_id=142129438%40N03&format=json&nojsoncallback=1&auth_token=72157670865324245-72eeb90cad881193&api_sig=ccb6a9c38bc08036f7ba332e5f220642", false);
    
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var rsp = xmlhttp.response;
            var type = xmlhttp.getResponseHeader("Content-Type");
            var output = JSON.parse(rsp);
            console.log(output);

            for(i =0; i < output.photoset.photo.length; i++) {

              // Create a DIV which will house the entire thumbnail
              var image = document.createElement("DIV");
              image.setAttribute("class", "thumbnail");

              // Create an Image tag which will have the thumbnail from Flickr
              var img = document.createElement("IMG");
              img.setAttribute("src", "https://farm" + output.photoset.photo[i].farm + ".staticflickr.com/" + output.photoset.photo[i].server + "/" + output.photoset.photo[i].id + "_" + output.photoset.photo[i].secret + "_q.jpg");
              img.setAttribute("width", "250px");
              img.setAttribute("alt", output.photoset.photo[i].title);
              img.setAttribute("class", "image-thumb");

              // Create a Paragraph tag with the title to be displayed on hover
              var title = document.createElement("P");
              var thumbTitle = document.createTextNode(output.photoset.photo[i].title);
              title.appendChild(thumbTitle);
              title.setAttribute("class", "image-thumb-title");

              // Append the image thumbnail to the page
              document.body.appendChild(image);
              image.appendChild(img);
              image.appendChild(title);


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