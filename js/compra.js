comprado = localStorage.getItem("comprado");
comprado = JSON.parse(comprado);
var cont;
var saveArray = [];
var mercado;
var checkbox;

function compra(){
  cont = 0;
  var tabla = document.getElementById("personajes");
  for(var i = 0; i < comprado.length; i++){
      var tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${comprado[i].description}</td>
        <td>${comprado[i].monto}</td>
        <td><button type="button" class="btn btn-danger" onclick="borrar(${comprado[i].monto})">Quitar</button> </td>
      `;
      tr.id = comprado[i].monto;
      tabla.appendChild(tr);
      var sum = parseInt(comprado[i].monto);
      cont = cont + sum;
    }
    var td = document.createElement('tr');
    td.innerHTML = `
    <td>Total</td>
    <td>$${cont}</td>
    <td><button type="button" class="btn btn btn-success" onclick="datos()">CONFIRMAR REGALOS</button></td>
    `;
    td.id = 'total';
    tabla.appendChild(td)
  };
  compra();

function deletep(ubicacion, tabla){
tabla.splice(ubicacion, 1)
};
function eliminarSeleccion(monto, matriz){
  for(i = 0; i < matriz.length; i++){
    var rev = matriz[i];
    if(monto == rev.monto ){
      return i
      }
    }
    return ""
  };
function borrar(id){
  var tabla = localStorage.getItem("comprado");
  tabla = JSON.parse(tabla);
  var dev = eliminarSeleccion(id, tabla);
  if(dev !== ''){
  deletep(dev, tabla)
};
  tabla = JSON.stringify(tabla);
  localStorage.setItem("comprado", tabla);
  var tr = document.getElementById(id);
  tr.parentNode.removeChild(tr);
  var linea = document.getElementById("total");
  linea.parentNode.removeChild(linea);
  tabla = localStorage.getItem("comprado");
  tabla = JSON.parse(tabla);
  var template = document.getElementById("personajes");
  cont = 0;
  for(var i = 0; i < tabla.length; i++){
    sum = parseInt(tabla[i].monto)
    cont = cont + sum;
  };
  var td = document.createElement('tr');
  td.innerHTML = `
  <td>Total</td>
  <td>$${cont}</td>
  <td><button type="button" class="btn btn btn-success" onclick="datos()">CONFIRMAR REGALOS</button>
  `;
  td.id = 'total';
  template.appendChild(td);
  pago = document.getElementById("pago");
  localStorage.cont = cont;
  if(pago !== null){
    pago.parentNode.removeChild(pago);
  }
};

function datos(){
  pago = document.getElementById("pago");
  if(pago == null){
  var pantalla = document.getElementById("principal");
  var caja = document.createElement("div");
  mercado = cont*1.05;
  caja.innerHTML = `
<form action="reg.php" method="POST">
<div class="form-group">
  <input name="nombre" class="form-control" type="text" placeholder="Nombre" required>
</div>
<div class="form-group">
  <input name="mail" class="form-control" type="emailS" placeholder="Mail" required>
</div>
<div class="form-group">
  <textarea name="dedicatoria" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu saludo para los novios!"></textarea>
</div>
<div class="form-group form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
  <label class="form-check-label" for="exampleRadios1">
    MercadoPago (Tiene una recarga del 5%)
  </label>
</div>
<div class="form-group form-check">
<label class="form-check-label" for="exampleRadios1">
  Monto final con MercadoPago $${mercado}.
</label>
</div>
<div class="form-group form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Transferencia o Deposito
  </label>
</div>
<div class="form-group form-check">
  <input type="hidden" name="monto" id="valor_final" class="form-control" type="text" value="">
</div>
<button type="" class="btn btn-primary">PROCEDER AL PAGO</button>
</form>
  `;
  caja.className = "container";
  caja.id = "pago";
  pantalla.appendChild(caja);
};
checkbox = document.getElementById('exampleRadios1');
checkbox2 = document.getElementById('exampleRadios2');
checkbox.addEventListener("change", comprueba, false);
checkbox2.addEventListener("change", comprueba, false);
};

function on(){
  var monto = document.getElementById('valor_final');
  monto.setAttribute("value", mercado);
};

function off(){
  var monto = document.getElementById('valor_final');
  monto.setAttribute("value", cont);
};

function comprueba(){
  if(checkbox.checked){
      on();
  }else if(checkbox2.checked){
     off();
  };
};
