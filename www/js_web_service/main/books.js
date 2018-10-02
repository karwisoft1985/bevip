var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

function downloadFileen(file){
    var fileTransfer = new FileTransfer();
fileTransfer.download(
    "http://www.karwisoft.tn/php_bevip/upload/books/en/"+file,
    cordova.file.externalApplicationStorageDirectory+file,
    function(entry) {
		cordova.plugins.fileOpener2.open(
    entry.toURL(), 
    'application/pdf', 
    { 
        error : function(e) { 
            alert('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {				
        }
    }
);
    },
    function(error) {
        alert("upload error: Check your internet connection!");
    });
}

function downloadFilefr(file){
    var fileTransfer = new FileTransfer();
fileTransfer.download(
    "http://www.karwisoft.tn/php_bevip/upload/books/fr/"+file,
    cordova.file.externalApplicationStorageDirectory+file,
    function(entry) {
		cordova.plugins.fileOpener2.open(
    entry.toURL(), 
    'application/pdf', 
    { 
        error : function(e) { 
            alert('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {				
        }
    }
);
    },
    function(error) {
        alert("Erreur de téléchargement: Vérifier votre connexion Internet!");
    });
}

function downloadFilear(file){
    var fileTransfer = new FileTransfer();
fileTransfer.download(
    "http://www.karwisoft.tn/php_bevip/upload/books/ar/"+file,
    cordova.file.externalApplicationStorageDirectory+file,
    function(entry) {
		cordova.plugins.fileOpener2.open(
    entry.toURL(), 
    'application/pdf', 
    { 
        error : function(e) { 
            alert('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {				
        }
    }
);
    },
    function(error) {
        alert("تثبت من الانترنت");
    });
}

$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
	db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 
var dataString='cat='+cat+'&lang='+lang;
$.getJSON("http://karwisoft.tn/php_bevip/books/books.php",dataString,	
  function (donnees) {	
	var div ='';										
									 for (var i = 0; i < donnees.books.length; i++){
										 if((i % 2)==0){
									  div += ' <div class="row" style="padding:5px;background:#fff;">';}
									  else{
									div += ' <div class="row" style="padding:5px;background:#8dc0d1;">';}
									 div += '<div class="col-md-4 col-sm-4 col-xs-4">';
									 div += '<center><img src="http://karwisoft.tn/php_bevip/books/img/'+lang+'/'+donnees.books[i].img+'" style="width:100%" class="img-responsive"/> </center>';									 
									 div += '</div>';									 
				                     div += '<div class="col-md-8 col-sm-8 col-xs-8"><div style="font-size:16px;font-weight:bold;color:#000;margin-top:5px;">';						
					                 div +='<center>'+donnees.books[i].title+'</center></div>';
					                 div +='<p style="text-align:justify;padding:10px;">'+donnees.books[i].description+'</p>';
									  div +='<center><p><a onclick="downloadFile'+lang+'(\''+donnees.books[i].url+'\')" style="color:#0000EE"><b>';
									   if(lang=='fr'){
										div +='Télécharger'	;
									  }
									  else if(lang=='ar'){
										div +='تحميل'	;
									  }
									  else {
										div +='Download';
									  }
									  div +='</b></a></center>';
									  div +="<div class=\"bottom-partage\" onclick=\"share('"+lang+"', '"+donnees.books[i].title+"', '"+donnees.books[i].img+"', '"+donnees.books[i].url+"');\"><i class=\"fa fa-share-alt\" style=\"color:#fff;font-family:14px;\"></i>";
									  if(lang=='fr'){
										div +='Partager'	;
									  }
									  else if(lang=='ar'){
										div +='شارك'	;
									  }
									  else {
										div +='Share';
									  }
									 div +=" </div> </div></div>";
										}								
																		
									$("#listbooks").html(div);

});
});
});	
});
function share(lang,title,img,url){
window.plugins.socialsharing.share(title, null,'http://karwisoft.tn/php_bevip/books/img/'+lang+'/'+img, 'http://www.karwisoft.tn/php_bevip/upload/books/'+lang+'/'+url);
}