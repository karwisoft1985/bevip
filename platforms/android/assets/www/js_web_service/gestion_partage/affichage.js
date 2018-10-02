 /***********afficher liste des partages**************/
 $(document).ready(function () {
var device=sessionStorage.getItem("device");
var dataString='device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_partage/afficher_partage.php",dataString,
        function (donnees) {

            var contenuHtml = '';
         if (donnees.partage[0].id_partage != 0) {
            for (var i = 0; i < donnees.partage.length; i++) {

				 contenuHtml +='	<div class="partage-bvp">';
		
		     contenuHtml +=' <div class="ent-partage-bvp">';
			     			if ( donnees.partage[i].photo != '' ){
 contenuHtml += ' <img src="http://karwisoft.tn/php_bevip/upload/'+donnees.partage[i].photo+'" class="img-ent-partage-bvp" />';
}else {
				 contenuHtml +=' <img src="assets/img/user.png"  class="img-ent-partage-bvp"  />';
				 }
				 contenuHtml +='<label class="name-user-ent-partage-bvp">'+donnees.partage[i].name+' </label><br>';
				 
				contenuHtml +=' <label class="time-user-ent-partage-bvp">'+donnees.partage[i].date+' </label>';
				 
				 contenuHtml +='<i class="fa fa-caret-down" style="color:#979292;float:right;font-size:12px;margin-top:-15px;" aria-hidden="true"></i></div>';
			
			contenuHtml +='<div class="bl-part">';
			contenuHtml += ' <img src="http://karwisoft.tn/php_bevip/upload_partage/'+donnees.partage[i].objet+'" class="bl-part-cont" />';
			   
			contenuHtml +='</div></div>';
           
            document.getElementById("partage").innerHTML = contenuHtml;
		}
}		
        });
});