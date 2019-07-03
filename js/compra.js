comprado = localStorage.getItem("comprado");
comprado = JSON.parse(comprado);
var cont
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
    <td><button type="button" class="btn btn btn-success" onclick="pagar()">PAGAR</button> </td>
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
  <td><button type="button" class="btn btn btn-success" onclick="">PAGAR</button> </td>
  `;
  td.id = 'total';
  template.appendChild(td);
};

function pagar(){
var pantalla = document.getElementById("principal");
var caja = document.createElement("div");
caja.innerHTML = `
  <h2>Ultimo Paso!</h2>
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
pantalla.appendChild(caja);
}
