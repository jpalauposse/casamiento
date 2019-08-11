<!doctype html>
<html lang="en">
<?php include 'head.php' ?>
<body>
  <?php include 'header.php'?>
  <div class="container-fluid marketing">
      <div class="row">
        <div class="col-xl-2" id="izq">
        </div>
        <div class="col-xl-8 container" id="carro" >
          <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Monto</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="personajes">
            </tbody>
          </table>
          </div>
          <div class="row" id="principal">

          </div>
          <div class="row footer">
              <?php include 'footer.php'?>
          </div>
        </div>
        <div class="col-xl-2" id="der">
        </div>
      </div>
  </div>
  <script src="js/listado.js"></script>
  <script src="js/compra.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</html>
