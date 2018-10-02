document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  document.getElementById("audioCapture").addEventListener("click", audioCapture);
document.getElementById("imageCapture").addEventListener("click", imageCapture);
document.getElementById("videoCapture").addEventListener("click", videoCapture);
document.getElementById("choosePhoto").addEventListener("click", choosePhoto);
}
/************Image**********/
function imageCapture() {
navigator.camera.getPicture(onSuccess, onError,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.CAMERA,
  //allowEdit : true,
  encodingType: Camera.EncodingType.PNG,
  targetWidth: 400,
  targetHeight: 400,
  saveToPhotoAlbum: true }
    );
  /* var options = {
      limit: 1
   };*/

   navigator.device.capture.captureImage(onSuccess, onError, options);

   function onSuccess(imageURI) {
  
    var image = document.getElementById('capture_image');
    image.src = imageURI;
	 var options = new FileUploadOptions();
            options.fileKey="image";
			var test=imageURI.lastIndexOf('/')+1;
            options.fileName=imageURI.substr(test);
			options.mimeType="image/jpeg";

            var params = new Object();
        var device=sessionStorage.getItem("device");
            params.value1 = device;
 
           options.params = params;
            options.chunkedMode = false;
		
            var ftp = new FileTransfer();
            ftp.upload(imageURI, "http://karwisoft.tn/php_bevip/gestion_partage/upload_image.php?device="+device, win, fail, options);
   // document.getElementById("text2").innerHTML = imageURI;
     /* var i, path, len;
		
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
      }*/
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
	
}
function win(r) {
   location.reload();
			
        }
 
        function fail(error) {
            alert("An error has occurred: Code = " = error.code);
        }
/**********Galerie**********/
function choosePhoto()
{
navigator.camera.getPicture(onlibSuccess, onlibFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  //allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 400,
  targetHeight: 400,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false }
    );
	}
function onlibSuccess(photoURI) {
 var image = document.getElementById('galerie_image');
   image.src = photoURI;
 var options = new FileUploadOptions();
            options.fileKey="image";
			var test=photoURI.lastIndexOf('/')+1;
			var img=photoURI.lastIndexOf('?');
			
			var nb= img - test;
            options.fileName=photoURI.substr(test,nb);
			options.mimeType="image/jpeg";
 
            var params = new Object();
        var device=sessionStorage.getItem("device");
            params.value1 = device;
 
            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
			photoURI=photoURI.substr(0,img);
            ft.upload(photoURI, "http://karwisoft.tn/php_bevip/gestion_partage/upload_image.php?device="+device, wing, failg, options);
}

function onlibFail(message) {
    alert('Failed because: ' + message);
}
function wing(r) {
   location.reload();
			
        }
 
        function failg(error) {
            alert("An error has occurred: Code = " = error.code);
        }	
/*************video***********/	
function videoCapture() {

   var options = {
      limit: 1,
      duration: 10
   };

   navigator.device.capture.captureVideo(onSuccess, onError, options);

   function onSuccess(mediaFiles) {
    var video = document.getElementById('capture_video');
    video.src = mediaFiles;
	 var options = new FileUploadOptions();
            options.fileKey="video";
          var testv=mediaFiles[0].fullPath;
		   var testvideo=testv.lastIndexOf('/')+1;
		  options.fileName=testv.substr(testvideo);
			options.mimeType="video/mp4";
            var params = new Object();
        var device=sessionStorage.getItem("device");
            params.value1 = device;
 
           options.params = params;
            options.chunkedMode = false;
		
            var ftp = new FileTransfer();
            ftp.upload(testv, "http://karwisoft.tn/php_bevip/gestion_partage/upload_video.php?device="+device, winv, failv, options);
     /* var i, path, len;
		
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
      }*/
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
	
}
function winv(r) {
   location.reload();
			
        }
 
        function failv(error) {
            alert("An error has occurred: Code = " = error.code);
        }
/*********Audio********/
		function audioCapture() {

   var options = {
      limit: 1,
      duration: 10
   };

   navigator.device.capture.captureAudio(onSuccess, onError, options);

   function onSuccess(mediaFiles) {
   var audio = document.getElementById('capture_audio');
    audio.src = mediaFiles;
	 var options = new FileUploadOptions();
            options.fileKey="audio";
          var path=mediaFiles[0].fullPath;
		   var testaudio=path.lastIndexOf('/')+1;
		  options.fileName=path.substr(testaudio);
			options.mimeType="audio/amr";
            var params = new Object();
        var device=sessionStorage.getItem("device");
            params.value1 = device;
 
           options.params = params;
            options.chunkedMode = false;
		
            var ftp = new FileTransfer();
            ftp.upload(path, "http://karwisoft.tn/php_bevip/gestion_partage/upload_audio.php?device="+device, winau, failau, options);
      /*var i, path, len;
		
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
      }*/
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
	
}
function winau(r) {
   location.reload();
			
        }
 
        function failau(error) {
            alert("An error has occurred: Code = " = error.code);
        }