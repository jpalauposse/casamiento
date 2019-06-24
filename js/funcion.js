
function createList() {
  var conteiner = document.getElementById("marketing");
  var row = document.createElement('div');
  for (var i = 0; i < regalos.length; i++) {
    var col = document.createElement('div')
    col.innerHTML =
      `
    <img class="bd-placeholder-img rounded-circle foto" width="140" height="140" src="fotos/${regalos[i].foto}" alt="${regalos[i].alt}">
    <h2>${regalos[i].titulo}</h2>
    <p>$ ${regalos[i].precio}</p>
    <button class="btn btn-secondary boton" href="" role="button" onclick="seleccion()">Comprar</button>
    <p></p>
    `;
    col.className = "col-lg-3 text-center";
    row.appendChild(col);
  }
  conteiner.appendChild(row);
  row.className = "row";

};
createList();

function seleccion(){
var carrito = document.getElementById("fab");
var obj = document.createElement("a");
obj.innerHTML = `
<i class="fas fa-cart-arrow-down"></i>
`;
obj.href = "pages/carrito.html";
carrito.appendChild(obj);

};
