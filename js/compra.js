comprado = localStorage.getItem("comprado");
comprado = JSON.parse(comprado);

function compra(){
  var cont = 0;
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
    <td id="total">$${cont}</td>
    <td><button type="button" class="btn btn-danger">Quitar todos</button> </td>
    `;
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
};
