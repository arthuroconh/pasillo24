<?php
   $carpeta = $_GET['carpeta'];
   $ruta = "imagenes/".$carpeta."/";
   if (!file_exists($ruta)) {
   $directorio = $ruta;
   $dirmake = mkdir("$directorio", 0777);
   $a=$_FILES["file"]["name"];
   $nombre_imagen = $a;
   move_uploaded_file($_FILES["file"]["tmp_name"], $ruta.$nombre_imagen);
   }else{
   $a=$_FILES["file"]["name"];
   $nombre_imagen = $a;
   move_uploaded_file($_FILES["file"]["tmp_name"], $ruta.$nombre_imagen);
   }
?>
