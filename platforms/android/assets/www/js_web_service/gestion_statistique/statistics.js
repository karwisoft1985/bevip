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
if ( window.location.search.indexOf('date') == -1) {
d = new Date ();

var date= d.toISOString().substring(0, 10);
} 
else {
var CheminComplet =  window.location.search;
var date =CheminComplet.substring( CheminComplet.indexOf( "date=" )+5 ,CheminComplet.length );
}
var nb=0;
var efficacite=0;
var nbre=0;
var pourcentage=0;
var taux_eff=0;
var value=0;
var val_efficacite=0;
var nbre_fam=0;
var str = [];
		db.transaction(function(tx) {
tx.executeSql("SELECT categorie, taux FROM statistique where date = '" + date+"' ", [] ,
								function(tx, result) { 								
				
									dataset = result.rows;	
									if (dataset.length > 0){
									for ( var l = 0, item = null; l < dataset.length; l++) {
										item = dataset.item(l);
										categorie = item['categorie'];
										 taux = item['taux'];
										 taux = parseFloat(taux);
									var str_stat= {"value": taux, "label": categorie};
										str.push(str_stat);
										 efficacite += taux;
										 }
	setTimeout( function() {
	var value_ineff=100 - efficacite;
	   var label_ineff=' ';
	   var str_glob= {"value":value_ineff, "label": label_ineff};
	str.unshift(str_glob);
if(lang=="fr"){
var title ='Taux d\'efficacité de';}
 else if(lang == 'ar'){
var title ='معدل فعالية يوم';}
else{var title ='Rate of effectiveness of';}

		var revenueChart = new FusionCharts({
		type: 'doughnut2d',
        renderAt: 'chart-container-catego',
        width: '100%',
        height: '300',
        dataFormat: 'json',
        dataSource:{
		    "chart": {
			    "caption": title+" "+date+": "+efficacite.toFixed(2)+"%",
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
var title ='Taux d\'efficacité de';}
 else if(lang == 'ar'){
var title ='معدل فعالية يوم';}
else{var title ='Rate of effectiveness of';}
var revenueChart = new FusionCharts({
		
		type: 'doughnut2d',
        renderAt: 'chart-container-catego',
        width: '100%',
        height: '300',
        dataFormat: 'json',
        dataSource:{
		
		    "chart": {
			    "caption": title+" "+date+": 0%",
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
		  
		    }

			);
	   

	   });
	  
});
});
});
