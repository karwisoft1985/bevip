var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

function onload()
{
    document.addEventListener("deviceready",onDR,false);
}
function onDR()
{
alert("device ready");
}


/*****************Modifier photo de profil à partir du camera******************/
function takephotoURL()
{
navigator.camera.getPicture(onURLSuccess, onURLFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
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
			
            ftp.upload(imageURI, "http://karwisoft.tn/php_bevip/gestion_inscription/modifier_image.php?device="+device, wintp, failtp, options);
			document.getElementById("imageprofil").innerHTML ="<img src='"+imageURI+"'  style='width:200px;height:200px;border-radius:100%;'/>";
			
			var req = "UPDATE utilisateur SET image = '"+ imageURI +"' WHERE id_utilisateur= '1' ";

            db.transaction(function(tx) {
							           
			   tx.executeSql(req, []);
									
			});
			
	 $('#myModalChoixPhoto').modal('hide');
   // document.getElementById("text2").innerHTML = imageURI;
}
function wintp(r) {
   location.reload();
			
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
{
navigator.camera.getPicture(onlibSuccess, onlibFail,
{ quality : 30,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  allowEdit : true,
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
			
            ft.upload(imageURI, "http://karwisoft.tn/php_bevip/gestion_inscription/modifier_image.php?device="+device, win, fail, options);
			
			document.getElementById("imageprofil").innerHTML ="<img src='"+imageURI+"'  style='width:200px;height:200px;border-radius:100%;'/>";
			
			var req = "UPDATE utilisateur SET image = '"+ imageURI +"' WHERE id_utilisateur= '1' ";

            db.transaction(function(tx) {
							           
			   tx.executeSql(req, []);
									
			});
			
	 $('#myModalChoixPhoto').modal('hide');
}

function win(r){

  $('#myModalChoixPhoto').modal('hide');

}
function fail(error) {

  // alert("An error has occurred: Code = " = error.code);

}
function onlibFail(message) {
   // alert('Failed because: ' + message);
}
/**********Suppression photo de profil**********/
 function suppressionphoto(){

/*var device=sessionStorage.getItem("device");
var dataString='device='+device;

$.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/supprimer_image.php", dataString,
        function (donnees) {
		
	             location.reload();
		
		});*/
var img="assets/img/UserImage.png";
var req = "update utilisateur set image='"+img+"'";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });

}