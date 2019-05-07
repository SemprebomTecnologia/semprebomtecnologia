<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Majestic Admin</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="images/favicon.png" />
</head>

<body>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div class="row flex-grow">
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="auth-form-transparent text-left p-3">
              <div class="brand-logo">
                <img src="images/logo.svg" alt="logo">
              </div>
                <form method="post" action="verificaLogin.php" >
                  <p>
                      Usuario:  <input type="text" name="username" />
                  </p>
                  <p>
                      Email: <input type="password" name="password"   />
                  </p>
                  
                  <button type="submit" class="btn btn-primary mr-2">Login</button>
                  <button type="reset" class="btn btn-primary mr-2">Cancelar</button>
                          
            </div>
          </div>
        
          <div class="col-lg-6 login-half-bg d-flex flex-row">
            <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018  All rights reserved.</p>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>

  <script>
    

    // $.ajax({
    //   method: "POST",
    //   url: "cadastrar.php",
    //   data: { nome: "Pedro", email: "pedro@email.com" }
    //  })
  </script>    

</body>

</html>
