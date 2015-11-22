var db;
var existe_db;
function onBodyLoad () {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady () {
	existe_db=window.localStorage.getItem("existe_db");
	db= window.openDatabase("ffasil", "1.0", "DB del curso Phonegap", 200000);
	if (existe_db==null) {
		crearDB();
	}else{
		cargaDatos();
	}
}

function crearDB () {
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
}

function creaNuevaDB (tx) {
	tx.executeSql('DROP TABLE IF EXISTS sesion');
	
	var sql = "CREATE TABLE IF NOT EXISTS sesion("+"id INTEGER PRIMARY KEY,"+
		"usuario VARCHAR(80))";
	tx.executeSql(sql);

	tx.executeSql("INSERT INTO sesion(id,usuario) VALUES('"+window.localStorage.getItem('clave')+"','"+window.localStorage.getItem('usuario')+"')");
}

function creaSuccess () {
	window.localStorage.setItem("existe_db",1);
	
	cargaDatos();
}
function errorDB (err) {
	navigator.notificacion.alert("Error procesando consulta.")
}
function cargaDatos () {
	db.transaction(cagarRegistros, errorDB);
}
function cagarRegistros (tx) {
	tx.executeSql('SELECT * FROM sesion',[], cargaDatosSuccess, errorDB);
}
function cargaDatos (tx,results) {
	if (results.rows.length == 0) {
		navigator.notificacion.alert("Error procesando consulta.");
	}
	for (var i = 0; i < results.rows.length; i++) {
		var u = results.rows.item(i);
        $( "#user" ).empty();
        $("#user").append(u.usuario);
	}
}