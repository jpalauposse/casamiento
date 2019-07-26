<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Lista de Regalos</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <!-- Custom styles for this template -->
  <link href="css/styles.css" rel="stylesheet">
</head>
<body>
<?php include 'header.php';?>
<main class="container" id='informacion'>

</main>
<?php
//conexion con la base de datos y el servidor
$link = mysqli_connect("localhost","id9582520_javier","431957","id9582520_regalos") or die("<h2>No se encuentra el servidor</h2>");
//$db = mysqli_select_db("regalos",$link) or die("<h2>Error de Conexion</h2>");

//obtenemos los valores del formulario
$Nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$dedicatoria = $_POST['dedicatoria'];
$monto = $_POST['monto'];

//Obtiene la longitus de un string
//$req = (strlen($Nombre)*strlen($mail)*strlen($dedicatoria)*strlen($monto)) or die("No se han llenado todos los //campos");

//ingresamos la informacion a la base de datos
mysqli_query($link,"INSERT INTO persona (Nombre, mail, dedicatoria, monto) VALUES('$Nombre','$mail','$dedicatoria','$monto')") or die("<h2>Error Guardando los datos</h2>");
if($_POST['exampleRadios'] === 'option1'){
  // SDK de Mercado Pago
  require __DIR__ .  '/vendor/autoload.php';
  // Agrega credenciales
  MercadoPago\SDK::setAccessToken('APP_USR-5470896262684941-072018-3098ef56a56e976dd382396e10266174-98450703');
  // Crea un objeto de preferencia
  $preference = new MercadoPago\Preference();
  // Crea un ítem en la preferencia
  $item = new MercadoPago\Item();
  $item->title = 'Regalo de Casamiento';
  $item->quantity = 1;
  $item->unit_price = $_POST['monto'];
  $preference->items = array($item);
  $preference->save();

   ?><script>window.open('<?php echo $preference->init_point?>', 'target')</script>;<?php

}else{
  echo'
  <script>
      var cont = localStorage.cont
      var pantalla = document.getElementById("informacion");
      var caja = document.createElement("div");
        caja.innerHTML =
          `
  <h2>Muchas gracias! </br> Se a registrado tu regalo! </br>Ultimo Paso!</h2>
  <h3>Depositar o transferir el monto $${cont} a la cuenta</h3>
  <h3> Banco: Santader RIO </br>
    Cuenta:</br>
    Titular:</br>
    DNI:</br>
    CBU:</br>
    Alias: </h3>
  <h3>Enviar mail del comprabante a la direccion casados@conamor.com.ar</h3>
  `;
        caja.className = "container text-center";
        caja.id = "pago";
        pantalla.appendChild(caja);
  </script>
  ';
};
?>
<?php
include 'footer.php';
?>
<script src="js/listado.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</html>
