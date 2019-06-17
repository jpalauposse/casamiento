function createList() {
  var conteiner = document.getElementById("marketing");
  var row = document.createElement('div');
  for (var i = 0; i < regalos.length; i++) {
    var col = document.createElement('div')
    col.innerHTML =
      `
    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="fotos/${regalos[i].foto}" alt="${regalos[i].alt}">
    <h2>${regalos[i].titulo}</h2>
    <p>${regalos[i].precio}</p>
    <p><a class="btn btn-secondary boton" href="#" role="button">Comprar</a></p>
    `;
    col.className = "col-lg-3";
    row.appendChild(col);
  }
  conteiner.appendChild(row);
  row.className = "row"
};
createList();
