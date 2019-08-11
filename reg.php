<!doctype html>
<html lang="en">
<?php include 'head.php' ?>
<body>
<?php include 'header.php';?>
<div class="container-fluid marketing" id="">
    <div class="row">
      <div class="col-xl-2" id="izq">
      </div>
      <div class="col-xl-8" >
        <div class="row" id="informacion">

        </div>
        <div class="row footer">
            <?php include 'footer.php'?>
        </div>
      </div>
      <div class="col-xl-2" id="der">
      </div>
    </div>
</div>
<?php
//conexion con la base de datos y el servidor
$link = mysqli_connect("localhost","u497961469_javie","431957","u497961469_regal") or die("<h2>No se encuentra el servidor</h2>");
//$db = mysqli_select_db("regalos",$link) or die("<h2>Error de Conexion</h2>");

//obtenemos los valores del formulario
$Nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$dedicatoria = $_POST['dedicatoria'];
$monto = $_POST['monto'];
$mediodepago = $_POST['exampleRadios'];
$fecha = strftime( "%Y-%m-%d-%H-%M-%S", time() );

//Obtiene la longitus de un string
//$req = (strlen($Nombre)*strlen($mail)*strlen($dedicatoria)*strlen($monto)) or die("No se han llenado todos los //campos");

//ingresamos la informacion a la base de datos
mysqli_query($link,"INSERT INTO persona (nombre, mail, dedicatoria, monto, mediodepago, fecha) VALUES('$Nombre','$mail','$dedicatoria','$monto','$mediodepago','$fecha')") or die("<h2>Error Guardando los datos</h2>");

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
  $item->currency_id = "ARS";
  $item->unit_price = $_POST['monto'];
  $preference->items = array($item);
  $preference->back_urls = array(
    "success" => "https://pauyjavi.com.ar",
    "failure" => "https://pauyjavi.com.ar",
    "pending" => ""
);
  $preference->save();

   ?><script>window.open('<?php echo $preference->init_point?>', '_self')</script>;<?php

}else{
  ini_set( 'display_errors', 1 );
   error_reporting( E_ALL );
   $from = "noviosviajeros@pauyjavi.com.ar";
   $subject = "Regalo para Pau y Javi";
   $message = "
   <h2>Muchas gracias!</h2>
   <h4> Se a registrado tu regalo! </br>Ultimo Paso</h4>
   <h3>Depositar o transferir el monto $$monto a la cuenta</h3>
   <h3> Banco: Santader RIO </br>
     Cuenta: 514-354096/9</br>
     Tipo de cuenta: Cuenta Unica en Pesos.</br>
     Titular: Javier José Palau Posse</br>
     CUIL: 23-35320817-9</br>
     CBU: 0720514988000035409690</br>
     Alias: NUEZ.SORTEO.ALBA </h3>
   <h4>Enviar mail del comprabante a la direccion noviosviajeros@pauyjavi.com.ar</h4>";
   $headers = "From:" . $from;
   mail($mail,$subject,$message, $headers);
  echo'
  <script>
      var cont = localStorage.cont
      var pantalla = document.getElementById("informacion");
      var caja = document.createElement("div");
        caja.innerHTML =
          `
  <h2 class="como_comprar">Muchas gracias!</h2>
  <h4 class="saludos"> Se a registrado tu regalo! </br>Ultimo Paso</h4>
  <h3>Depositar o transferir el monto $$monto a la cuenta</h3>
  <h3> Banco: Santader RIO </br>
    Cuenta: 514-354096/9</br>
    Tipo de cuenta: Cuenta Unica en Pesos.</br>
    Titular: Javier José Palau Posse</br>
    CUIL: 23-35320817-9</br>
    CBU: 0720514988000035409690</br>
    Alias: NUEZ.SORTEO.ALBA </h3>
  <h3>Enviar mail del comprabante a la direccion noviosviajeros@pauyjavi.com.ar</h3>
  `;
        caja.className = "container text-center";
        caja.id = "pago";
        pantalla.appendChild(caja);
  </script>
  ';
};
?>
<script src="js/listado.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</html>
