(function() {
  var pictureTime, stringifyPictures, watchPictures;
  
  var sourceSupport = (function() {
    // IE9/10 doesn't support <source> outside the <video> element
    var picture = document.createElement("picture");
	picture.insertAdjacentHTML("afterbegin", "<source src='#' />");
	return !!picture.childNodes.length;
  })();
  
  var temporaryElementName;

  if( !sourceSupport ) {
    temporaryElementName = "x-pic-source8912";
    document.createElement(temporaryElementName);
    (document.head || document.getElementsByTagName("head")[0]).insertAdjacentHTML("beforeend", "<br><style>" + temporaryElementName + "{display:none}</style>");
  }
  
  function defaultGetPictures() {
	return document.getElementsByTagName("picture");
  }
  
  var getPictures = sourceSupport ?
	  defaultGetPictures
	  :
	  function () {		
		var pictures = document.getElementsByTagName("picture");
		
		if( !pictures.length ) {
			return pictures;
		}
		
		var xhr = new XMLHttpRequest;
		xhr.open("GET", document.URL, false);//synch request
		xhr.send();
		
		var pictureCount = 0;
		var originalPictures = [];
		
		var pageSourceCode = xhr.responseText;
		pageSourceCode.replace(/<picture[^>]*>([\s\S]*?)<\/picture>/gmi, function(a, strFound) {
		  if( pictureCount < pictures.length ) {
			pictures[pictureCount++].innerHTML = strFound.replace(/(<)source([^>\/]+)(.*?)(?:\/)?>/gmi, "$1" + temporaryElementName + "$2$3>1</" + temporaryElementName + ">");
		  }
		});
		
		getPictures = defaultGetPictures;
		
		return pictures;
	  }
	;
	
  var getSources = sourceSupport ?
    function(pic, picText) {
	  var frag = document.createElement("div");
      var srcs = picText.replace(/(<)source([^>]+>)/gmi, "$1div$2").match(/<div[^>]+>/gmi);
      frag.innerHTML = srcs.join("");
      return frag.getElementsByTagName("div");
	}
	:
	function(pic, picText) {
      return pic.getElementsByTagName(temporaryElementName);	
	}
  ;
	
  pictureTime = function() {
    var correctSrc, deviceRatio, frag, img, matches, media, pic, picImg, picText, pictures, resMatch, sAttr, sources, src, srcSets, srcs, _i, _j, _k, _len, _len1, _len2;
    pictures = getPictures();
    deviceRatio = window.devicePixelRatio ? Math.round(window.devicePixelRatio) : 1;
    if (deviceRatio > 2) {
      deviceRatio = 2;
    }
    for (_i = 0, _len = pictures.length; _i < _len; _i++) {
      pic = pictures[_i];
      matches = [];
      sources = pic.getElementsByTagName("source");
      if (pic.innerHTML === "") {
        if ((img = pic.getElementsByTagName("img")[0]) && (src = img.getAttribute("data-src"))) {
          img.setAttribute("src", src);
        }
        return null;
      }
      if (!sources.length) {
	    var picText = pic.innerHTML;
		sources = getSources(pic, picText);
      }
      for (_j = 0, _len1 = sources.length; _j < _len1; _j++) {
        sAttr = sources[_j];
        media = sAttr.getAttribute("media");
        if (!media || window.matchMedia && window.matchMedia(media).matches) {
          matches.push(sAttr);
          break;
        }
      }
      picImg = pic.getElementsByTagName("img")[0];
      if (matches.length !== 0) {
        if (!picImg) {
          picImg = document.createElement("img");
          picImg.alt = pic.getAttribute("alt");
          pic.appendChild(picImg);
        }
        srcSets = matches.pop().getAttribute("srcset");
        if (srcSets && srcSets.length) {
          if (deviceRatio && srcSets.indexOf(" 2x") !== -1) {
            srcSets = srcSets.split(",");
            for (_k = 0, _len2 = srcSets.length; _k < _len2; _k++) {
              src = srcSets[_k];
              src = src.replace(/^\s*/, '').replace(/\s*$/, '').split(" ");
              resMatch = parseFloat(src[1], 10);
              if (deviceRatio === resMatch) {
                correctSrc = src[0];
                break;
              }
            }
          } else {
            correctSrc = srcSets;
          }
          picImg.src = correctSrc;
        }
      } else if (picImg) {
        pic.removeChild(picImg);
      }
    }
  };

  watchPictures = function(lastPictures) {
    var pictures;
    pictures = stringifyPictures();
    if (lastPictures && lastPictures !== pictures) {
      pictureTime();
    }
    return setTimeout(function() {
      return watchPictures(pictures);
    }, 500);
  };

  stringifyPictures = function() {
    var picture, pictures, _i, _len, _ref;
    pictures = "";
    _ref = document.getElementsByTagName("picture");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      picture = _ref[_i];
      pictures += picture.outerHTML;
    }
    return pictures;
  };

  if (window.addEventListener) {
    window.addEventListener("resize", pictureTime, false);
    window.addEventListener("DOMContentLoaded", function() {
      pictureTime();
      return window.removeEventListener("load", pictureTime, false);
    }, false);
    window.addEventListener("load", pictureTime, false);
  } else {
    window.attachEvent("onload", pictureTime);
  }

  if (typeof define === 'function') {
    define(function() {
      return pictureTime;
    });
  }

  watchPictures();

  pictureTime();

}).call(this);
