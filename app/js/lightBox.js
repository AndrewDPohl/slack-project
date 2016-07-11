function startLightBox() {
  var lbBg = document.getElementById("lightBoxBg");
  var lb = document.getElementById("lightBox");
  var bigPic = document.createElement("IMG");
  bigPic.setAttribute("src", "http://www.motherjones.com/files/imagecache/top-of-content-image/x-men-master.jpg");
  bigPic.setAttribute("id", "lightBoxPic");
  // bigPic.setAttribute("src", "https://farm" + output.photoset.photo[i].farm + ".staticflickr.com/" + output.photoset.photo[i].server + "/" + output.photoset.photo[i].id + "_" + output.photoset.photo[i].secret + "_q.jpg");
  document.getElementById('lightBox').appendChild(bigPic);
  lbBg.style.display = "block";
  lb.style.display = "block";
}

function dismiss() {
  var lbBg = document.getElementById("lightBoxBg");
  var lb = document.getElementById("lightBox");
  var lbp = document.getElementById("lightBoxPic");
  lbBg.style.display = "none";
  lb.style.display = " none";
  lbp.parentNode.removeChild(lbp);
}