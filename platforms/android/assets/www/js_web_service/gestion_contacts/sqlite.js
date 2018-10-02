


// JavaScript Document

//  Declare SQL Query for SQLite
 


var createTache = "CREATE TABLE IF NOT EXISTS  contact (id_contact Integer primary key ,name TEXT,num text,photo text,etat text)";

var db = openDatabase("bevip", "1.0", "bevip", 200000);  // Open SQLite Database

var dataset;

var DataType;

function initDatabase()  // Function Call When Page is ready.

{

try {

    if (!window.openDatabase)  // Check browser is supported SQLite or not.

    {

        alert('Databases are not supported in this browser.');

    }

    else {

 	   createTable();  // If supported then call Function for create table in SQLite
       
    }

}

catch (e) {

    if (e == 2) {

        console.log("Invalid database version.");

    } else {

        console.log("Unknown error " + e + ".");

    }

    return;

}

}




function createTable()  
 
{
    db.transaction(function (tx) { tx.executeSql(createTache,[]); });
    
 
}


initDatabase();
