_readyState(function() {

  // Place and handle Flickr images in the DOM
  var FlickrImages = {

    thumbData : {},
    arrPhotos : {},

    buildThumbnailGrid : function(){

      var arrPhotos = this.arrPhotos = this.thumbData.photos.photo;
      var i;
      var len = arrPhotos.length;
      var eleAnchorPhoto;
      var eleThbContainer = document.getElementById('thumbnail-container');
      var prevPhoto, nextPhoto, firstPhoto, lastPhoto;

      eleThbContainer.innerHTML = '';
      arrPhotos = this.buildPhotoNav();

      for (var i = 0, len; i < len; i++) {
        eleAnchorPhoto = this.buildImage(arrPhotos[i]);
        eleThbContainer.appendChild(eleAnchorPhoto);
      } 

    },

    buildPhotoNav : function(){

      var arrPhotos = this.thumbData.photos.photo;
      var oPhoto;
      var len = arrPhotos.length;
      var prevPhoto, nextPhoto, firstPhoto, lastPhoto;

      for (var i = 0, len; i < len; i++) {

        // IMPORTANT:
        // We'll need to use object clones so that when we're adding a 'nav' parameter
        // It won't be looped into the photo objects within the nav parameter.
        oPhoto = arrPhotos[0].clone();
        firstPhoto = arrPhotos[0].clone();
        lastPhoto = arrPhotos[len-1].clone();

        switch(i) {
          case 0:
            prevPhoto = arrPhotos[len-1].clone();
            nextPhoto = arrPhotos[i+1].clone(); 
            break;
          case len-1:
            prevPhoto = arrPhotos[i-1].clone();
            nextPhoto = arrPhotos[0].clone();
            break;
          default:
            nextPhoto = arrPhotos[i+1].clone(); 
            prevPhoto = arrPhotos[i-1].clone();
        };

        arrPhotos[i]['nav'] = {
          first:  firstPhoto,
          last:   lastPhoto,
          prev:   prevPhoto,
          next:   nextPhoto
        };


      }

      return arrPhotos;

    },

    buildImage : function(oPhoto){

      eleImg = document.createElement('img');
      eleImg.src = Flickr.buildThumbnailUrl(oPhoto);
      eleImg.alt = oPhoto.title;
      eleImg.title = oPhoto.title;
      eleImg._oPhoto = oPhoto;

         var bgImageUrl = "url('" + Flickr.buildPhotoUrl(oPhoto) + "')";

      eleDiv = document.createElement('div');
      eleDiv.style.backgroundImage = bgImageUrl;
      eleDiv.style.csstext = "";
      eleDiv.className = 'thumbnail popOpen grow';
      eleDiv.addEventListener('click', window.pop.open);
      eleDiv.appendChild(eleImg);
      eleDiv._oPhoto = oPhoto;

      return eleDiv;

    }

  }

  // Place the FlickrImages object on the DOM;
  window.FlickrImages = FlickrImages;


});