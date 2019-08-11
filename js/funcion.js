function createList() {
  var row = document.getElementById("marketing");
  //var row = document.createElement('div');
  var titulo= document.createElement('div');
  titulo.innerHTML = `
  <h2>Les compartimos nuestros deseos </br> de
   experiencias y aventuras</h2>
  `;
  titulo.className="col-lg-12 titulo text-center"
  row.appendChild(titulo);
  for (var i = 0; i < regalos.length; i++) {
    var col = document.createElement('div')
    col.innerHTML =
      `
    <img class="bd-placeholder-img rounded-circle foto" width="140" height="140" src="fotos/${regalos[i].foto}" alt="${regalos[i].alt}">
    <h4 id="descrip" class="descrip">${regalos[i].titulo}</h4>
    <p id="monto">$ ${regalos[i].precio}</p>
    <button class="btn btn-secondary boton" id="botonIng" role="button" onclick="seleccion(${i})">Comprar</button>
    <p></p>
    `;
    col.className = "col-lg-3 text-center";
    row.appendChild(col);
  }
  conteiner.appendChild(row);
  //row.className = "row";

};
createList();

function producto(description, monto) {
            this.description = description;
            this.monto = monto;
          };

function seleccion(id){
var seleccion = localStorage.getItem("comprado")
      seleccion = JSON.parse(seleccion)
      var id, description, monto;
      description = `${regalos[id].titulo}`;
      monto = `${regalos[id].precio}`;
      var selecc = new producto(description, monto)
      seleccion[seleccion.length] = selecc;
      seleccion = JSON.stringify(seleccion);
      localStorage.setItem("comprado", seleccion);
var changuito = document.getElementById("changuito");
if(changuito == null){
var carrito = document.getElementById("fab");
var obj = document.createElement("a");
obj.innerHTML = `
<i class="fas fa-cart-arrow-down"></i>
`;
obj.href = "carrito.php";
obj.id = "changuito";
carrito.appendChild(obj);

};};
