<?php
// Obtener la URL a la que se quiere acceder desde la consulta GET
$url = $_GET['url'];

// Realizar la solicitud a la URL externa y obtener el contenido
$content = file_get_contents($url);

// Devolver el contenido al navegador
echo $content;
?>
