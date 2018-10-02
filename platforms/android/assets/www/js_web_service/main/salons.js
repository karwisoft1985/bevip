var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
	db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 
var dataString='cat='+cat;
$.getJSON("http://karwisoft.tn/php_bevip/salons/salons.php",dataString,	
  function (donnees) {	
	var div ='';										
									 for (var i = 0; i < donnees.salons.length; i++){
									  div += '<div class="col-md-12 col-sm-12 col-xs-12">';
									 div += '<center><div class="bottom-date">'+donnees.salons[i].date_deb+' / '+donnees.salons[i].date_fin+'</div></center>';							 
				                     div += '<h2 style="margin-left:10px;color:#333">'+donnees.salons[i].titre+'</h2>';
					                 div +='<p style="text-align:justify;padding:10px;"><i class="fa fa-map-marker"></i> '+donnees.salons[i].lieu+'</p>';
									 div +='<a href="'+donnees.salons[i].url+'" ><div class="bottom-partage"><i class="fa fa-search"></i> ';
									   if(lang=='fr'){
										div +='Voir plus'	;
									  }
									  else if(lang=='ar'){
										div +='المزيد'	;
									  }
									  else {
										div +='See more';
									  }
									 div +="</div></a></div>";
										}								
																		
									$("#listsalons").html(div);

});
});
});	
});