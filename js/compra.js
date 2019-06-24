
function comprado(){
  var tabla = document.getElementById("personajes");
  for(var i = 0; i < regalos.length; i++){
      var tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${regalos[i].titulo}</td>
        <td>${regalos[i].precio}</td>
        <td><button type="button" class="btn btn-danger">Quitar</button> </td>
      `;
      tr.id = regalos[i].precio;
      tabla.appendChild(tr);
    }
    var td = document.createElement('tr');
    td.innerHTML = `
    <td>Total</td>
    <td></td>
    <td><button type="button" class="btn btn-danger">Quitar todos</button> </td>
    `;
    tabla.appendChild(td)
  };
  comprado();
