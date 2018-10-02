
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;





function onload()
{
    document.addEventListener("deviceready",onDR,false);
}
function onDR()
{
//alert("device ready");
}
/*****************enregistrer video******************

function takevideo() {
navigator.device.capture.captureVideo(captureSuccessv, captureErrorv, {limit: 1, duration: 10});   
}

function captureErrorv(e) {
    alert("capture error: "+JSON.stringify(e));
}

function captureSuccessv(mediaFile) {
	var name= mediaFile[0].fullPath.substr(mediaFile[0].fullPath.lastIndexOf('/')+1);
	var options = new FileUploadOptions();
    options.fileKey = "file";
	options.fileName = name;
    options.mimeType = "video/mp4";
    options.chunkedMode = false;
	
			var params = new Object();
			var device=sessionStorage.getItem("device");
            params.value1 = device;
            options.params = params;
			var ftp = new FileTransfer();
            ftp.upload(mediaFile[0].fullPath, "http://karwisoft.tn/php_bevip/support/send_video.php?device="+device, winv, failv, options);	
			}
            function winv(result) {
                alert('Upload success: ' + result.responseCode);
            }
            function failv(error) {
                alert('Error uploading file : ' + error.code);
            }

/*****************Modifier photo de profil à partir du camera******************/
function takephotoURL()
{ $('#myModalChoixPhoto').modal('hide');
navigator.camera.getPicture(onURLSuccess, onURLFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : false,
  encodingType: Camera.EncodingType.PNG,
  targetWidth: 100,
  targetHeight: 100,
  saveToPhotoAlbum: true }
    );
}
function onURLSuccess(imageURI) {
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
	 var options = new FileUploadOptions();
            options.fileKey="image";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType="image/jpeg";
 
            var params = new Object();
			var device=sessionStorage.getItem("device");
            params.value1 = device;
 
            options.params = params;
            options.chunkedMode = false;
            var ftp = new FileTransfer();
            ftp.upload(imageURI, "http://karwisoft.tn/php_bevip/support/send_image.php?device="+device, wintp, failtp, options);			
			
}
function wintp(r) {
			
        }
 
        function failtp(error) {
           // alert("An error has occurred: Code = " = error.code);
        }
function onFail(message) {
   // alert('Failed because: ' + message);
}

function onURLFail(message) {
  //  alert('Failed because: ' + message);
}


/******************Modifier photo de profil à partir du galerie******************/

function choosePhoto()
{ $('#myModalChoixPhoto').modal('hide');
navigator.camera.getPicture(onlibSuccess, onlibFail,
{ quality : 30,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  allowEdit : false,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 800,
  targetHeight: 800,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false }
    );
	}
function onlibSuccess(imageURI) {


 var image = document.getElementById('lib');
 image.src = imageURI;
 var options = new FileUploadOptions();
            options.fileKey="image";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType="image/jpeg";
 
            var params = new Object();
			var device=sessionStorage.getItem("device");
            params.value1 = device;
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
			
            ft.upload(imageURI, "http://karwisoft.tn/php_bevip/support/send_image.php?device="+device, win, fail, options);
			
}

function win(r){

}
function fail(error) {

  // alert("An error has occurred: Code = " = error.code);

}
function onlibFail(message) {
   // alert('Failed because: ' + message);
}

/*********************Send audio****************************/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();
//app.initialize();            
            

			
// capture callback
        var captureSuccess = function() {
        };
        
        // capture error callback
        var captureError = function(error) {
        };
        
        var mediaRec = null;
        var totalSeconds = 0;
        var timecounter = document.getElementById("timecounter");
        var interval = null;
        var src = null;
        
        function startRecorder() {
			/*document.getElementById("beginrecord").style.display="none";
			document.getElementById("stoprecord").style.display="block";*/
            totalSeconds = 0;            
            src = getFileName();
			var filePath = cordova.file.externalApplicationStorageDirectory;
            mediaRec = new Media(filePath + src, captureSuccess, captureError);
            mediaRec.startRecord();
            interval = setInterval(setTime, 1000);
        }
        
        function getFileName() {
            var d = new Date();            
            return d.getDate()+d.getMonth()+d.getFullYear()+"_"+d.getHours()+d.getMinutes()+d.getSeconds()+".m4a";
        }
        
        function endRecorder() {
            if(mediaRec != null) {
                mediaRec.stopRecord();
                clearInterval(interval);
				var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=mediaRec.src;
			options.mimeType="audio/mp4";
 
            var params = new Object();
			var device=sessionStorage.getItem("device");
            params.value1 = device;
 
            options.params = params;
            options.chunkedMode = false
				var ft = new FileTransfer();
            ft.upload(mediaRec.src, "http://karwisoft.tn/php_bevip/support/send_voice.php?device="+device, win, fail, options);
			
                mediaRec = null;
            }
			/*document.getElementById("stoprecord").style.display="none";
			document.getElementById("beginrecord").style.display="block";*/
			document.getElementById("timecounter").innerHTML ="";
        }
        
		
function win(){
}

function fail(error) {
}
        var playMedia = null;
        function playAudio(file) {
            var filePath = cordova.file.externalApplicationStorageDirectory;
            playMedia = new Media(filePath + file, function(){}, function(){});
            playMedia.play();
            window.resolveLocalFileSystemURL(file, getFileInfoSuccess, getFileInfoError);
        }
        
        function getFileInfoSuccess(fileInfo) {
            fileInfo.file(function(file) {
                          var s = "";
                          s += "<b>File size:</b> " + file.size + "<br/>";
                          });
        }
        
        function getFileInfoError(e) {
        }
                     
        
        
        function setTime()
        {
            ++totalSeconds;
            //document.getElementById("timecounter").innerHTML = totalSeconds;
			
        }