/************************Calcul efficacite******************************/
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;
								
$(document).ready(function () {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];  
d= new Date ();
var date= d.toISOString().substring(0, 10);   
var sync=0;
var nb=0;
var efficacite=0;
var pourcentage=0;
var taux_eff=0;
var value=0;
var val_efficacite=0;
var nbre_fam=0;
var str = [];
		db.transaction(function(tx) {
tx.executeSql("SELECT categorie, etat, COUNT(*) AS 'count' FROM tache where date = '" + date+"' or frequence='habitude'  GROUP BY categorie", [] ,

								function(tx, result) { 								
				
									dataset = result.rows;	
									var nombre=dataset.length;
									if (dataset.length > 0){
									for ( var l = 0, item = null; l < dataset.length; l++) {
										item = dataset.item(l);
										categorie = item['categorie'];
										 count = item['count'];
										 if(categorie=="Familiale")
										 {
									db.transaction(effectuee_fam(date));
									   db.transaction(efficace_fam(date));
									   setTimeout( function() {
										 nbre_fam=sessionStorage.getItem("nbre_fam");
										var efficacite_fam=sessionStorage.getItem("efficacite_fam");
										if(lang=="fr"){
												label= "Familiale";}
												else if(lang == 'ar'){
											label='عائلي';}
											else{label='Family';}
											if(nbre_fam!=0){
											
											pourcentage_fam =(nbre_fam*100)/efficacite_fam;
										
											value= pourcentage_fam/4;
											}
											else{
											value = 0;
											}
										val_efficacite += parseFloat(value);
										var str_fam= {"value": value, "label": label};
										str.push(str_fam);
										db.transaction(ajoutstat(date,value,label,sync));
										}, 500);
										}
										if (categorie=="Sociale"){
										  db.transaction(effectuee_soc(date));
									      db.transaction(efficace_soc(date));
										  setTimeout( function() {
										 var nbre_soc=sessionStorage.getItem("nbre_soc");
										var efficacite_soc=sessionStorage.getItem("efficacite_soc");
										if(lang=="fr"){
												label= "Sociale";}
												else if(lang == 'ar'){
											label='اجتماعي';}
											else{label='Social';}
											if(nbre_soc!=0){
											
											pourcentage_soc =(nbre_soc*100)/efficacite_soc;
										
											value= pourcentage_soc/4;
											}
											else{
											value = 0;
											}
										val_efficacite += parseFloat(value);
										var str_soc = {"value":value, "label": label};
										str.push(str_soc);
										db.transaction(ajoutstat(date,value,label,sync));
										}, 500);
										}
									
									if (categorie=="Personnel"){
									db.transaction(effectuee_pers(date));  
									db.transaction(efficace_pers(date));
									 setTimeout( function() {
										  var nbre_pers=sessionStorage.getItem("nbre_pers");
										var efficacite_pers=sessionStorage.getItem("efficacite_pers");
										if(lang=="fr"){
												label= "Personnelle";}
												else if(lang == 'ar'){
											label='شخصي';}
											else{label='Personal';}
											if(nbre_pers!=0){
											pourcentage_pers =(nbre_pers*100)/efficacite_pers;
										
											value= pourcentage_pers/4;
											}
											else{
											value = 0;
											}
										val_efficacite += parseFloat(value);
										var str_pers = {"value":value, "label": label};	
										str.push(str_pers);
										db.transaction(ajoutstat(date,value,label,sync));										
										}, 500);
										}
										if (categorie=="Professionnel"){
											db.transaction(effectuee_pro(date));									   
											db.transaction(efficace_pro(date));
											setTimeout( function() {
											var nbre_pro=sessionStorage.getItem("nbre_pro");
											var efficacite_pro=sessionStorage.getItem("efficacite_pro");
											if(lang=="fr"){
											label= "Professionnel";}
											else if(lang == 'ar'){
											label='إحترافي';}
											else{label='professional';}
											if(nbre_pro!=0){
											
											pourcentage_pro =(nbre_pro*100)/efficacite_pro;
										
											value= pourcentage_pro/4;
											}
											else{
											value = 0;
											}
										val_efficacite += parseFloat(value);
										var str_pro = {"value":value, "label": label};
										str.push(str_pro);										
										db.transaction(ajoutstat(date,value,label,sync));
										
											}, 500);
											}
									
		   }
		    function effectuee_fam(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Familiale' and etat='Done'", [], function(tx, results) {    
			   dataset = results.rows;
			  	nb_fam = dataset.length;
				sessionStorage.setItem("nbre_fam", nb_fam);
            });
			
        };	
		
    }
	function efficace_fam(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Familiale'", [], function(tx, results) {    
			   dataset = results.rows;
			  	efficace_fam = dataset.length;
				sessionStorage.setItem("efficacite_fam", efficace_fam);
            });
        };
    }
		  function effectuee_soc(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Sociale' and etat='Done'", [], function(tx, results) {    
			   dataset = results.rows;
			  	nb_soc = dataset.length;
				sessionStorage.setItem("nbre_soc", nb_soc);
            });
			
        };	
		
    }
	function efficace_soc(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Sociale'", [], function(tx, results) {    
			   dataset = results.rows;
			  	efficace_soc = dataset.length;
				sessionStorage.setItem("efficacite_soc", efficace_soc);
            });
        };
    }
	function effectuee_pers(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Personnel' and etat='Done'", [], function(tx, results) {    
			   dataset = results.rows;
			  	nb_pers = dataset.length;
				sessionStorage.setItem("nbre_pers", nb_pers);
            });
			
        };	
		
    }
	function efficace_pers(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Personnel'", [], function(tx, results) {    
			   dataset = results.rows;
			  	efficace_pers = dataset.length;
				sessionStorage.setItem("efficacite_pers", efficace_pers);
            });
        };
    }
	function effectuee_pro(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Professionnel' and etat='Done'", [], function(tx, results) {    
			   dataset = results.rows;
			  	nb_pro = dataset.length;
				sessionStorage.setItem("nbre_pro", nb_pro);
            });
			
        };	
		
    }
	function efficace_pro(date) {
        return function(tx) {
            tx.executeSql("SELECT * FROM tache where (date='"+date+"' or frequence='habitude') and categorie='Professionnel'", [], function(tx, results) {    
			   dataset = results.rows;
			  	efficace_pro = dataset.length;
				sessionStorage.setItem("efficacite_pro", efficace_pro);
            });
        };
    }
	setTimeout( function() {
	var value_ineff=100 - val_efficacite;
	   var label_ineff=' ';
	   var str_glob= {"value":value_ineff, "label": label_ineff};
	   			 if(lang=="fr"){
var title ='Taux d\'efficacité d\'aujourd\'hui';}
 else if(lang == 'ar'){
var title ='معدل فعالية اليوم';}
else{var title ='Rate of effectiveness of today:';}
	str.unshift(str_glob);
		var revenueChart = new FusionCharts({
		type: 'doughnut2d',
        renderAt: 'chart-container-categorie',
        width: '100%',
        height: '300',
        dataFormat: 'json',
        dataSource:{
		    "chart": {
			    "caption": title+" "+val_efficacite.toFixed(2)+"%",
                "numberPrefix": "$",
                "paletteColors": "#797979,#0075c2,#f45b00,#f2c500,#1aaf5d",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0"
            },
            "data":str
        }
    }).render();	  
	}, 500);
		  }
		   else{
		   	   var str_glob = {"value":"100", "label": " "};			
			   str.unshift(str_glob);
			   	   			 if(lang=="fr"){
var title ='Taux d\'efficacité d\'aujourd\'hui';}
 else if(lang == 'ar'){
var title ='معدل فعالية اليوم';}
else{var title ='Rate of effectiveness of today:';}
var revenueChart = new FusionCharts({
		
		type: 'doughnut2d',
        renderAt: 'chart-container-categorie',
        width: '100%',
        height: '300',
        dataFormat: 'json',
        dataSource:{
		
		    "chart": {
			    "caption": title+" 0%",
                "numberPrefix": "$",
                "paletteColors": "#797979,#0075c2,#f45b00,#f2c500,#1aaf5d",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0"
            },
			
            "data": str
        }
    }).render();
	
	
	
		   }
		  
		    } );
	   

	   });
	   
});
});
});
function ajoutstat(date,value,label,sync){

return function(tx){
tx.executeSql("SELECT id_stat FROM statistique where date = '" + date+"' and categorie = '" + label+"' ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
										for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_stat = item['id_stat'];
										var req1 = "update statistique set taux= '" + value +"', sync = 0 where id_stat = '" + id_stat +"' ";									
									tx.executeSql(req1, []);								
										}
}
else {															
var req = "insert or replace into statistique (date,taux,categorie,sync) values ('"
									+ date
									+ "','"
									+ value
									+ "','"
									+ label 
									+ "','"
									+ sync + "')";
									
									tx.executeSql(req, []);		
}
});	
																	

}
}

