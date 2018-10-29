<div class="wrapper ">
    <div class="sidebar" data-color="green" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
        <!--
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
        -->
        <div class="logo">
            <a href="../admin.php" class="simple-text logo-normal">
                SemprebomTecnologia
            </a>
        </div>
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="nav-item active  ">
                    <a class="nav-link" href="./listaProduto.php">
                        <i class="material-icons">dashboard</i>
                        <p>Produtos</p>
                    </a>
                </li>
                <li class="nav-item  ">
                    <a class="nav-link" href="../usuario/listaUsuario.php">
                        <i class="material-icons">person</i>
                        <p>Usuarios</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="content" >
        <div class="container-fluid" >
            <div class="row" >
                <div class="col-lg-10" style="float: none; margin: 0 auto;padding-left: 12%;" >
                    <div class="card">
                        <div class="card-header card-header-success">
                            <h4 class="card-title">Cadastro de Produtos </h4>
                            <p class="card-category">Cadastrar Produtos </p>
                        </div>

                        <div class="card-body">
                            <form name="FrmcadastroUsuario" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">ID</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Codigo de Barra</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">EAN</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Grupo</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">SubGrupo</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Tipo Unidade</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Descricao Produto</label>
                                            <input type="text" class="form-control" maxlength="30">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Descricao Cupom Fiscal</label>
                                            <input type="text" class="form-control" max="30">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">                                    
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Fornecedor</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>                                        
                                </div>

                                <div class="row">                                        
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Pre&ccedil;o Compra</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label class="bmd-label-floating"> &percnt; lucro</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Pre&ccedil;o Venda</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Estoque Atual</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Estoque Minimo</label>
                                            <input type="text" class="form-control" >
                                        </div>
                                    </div>                                        
                                </div>
                                <div class="row">                                        
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Descri&ccedil;&atilde;o</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="form-group">

                                            <select class="form-control selectpicker" id="selectEstado">
                                                <option selected value=""> SELECIONE UM ESTADO</option>
                                                <option value="PR" >PR</option>
                                                <option value="SC" >SC</option>
                                                <option value="CE" >CE</option>
                                                <option value="RJ" >RJ</option>
                                                <option value="RS" >RS</option>                                                    
                                            </select>
                                        </div>
                                    </div>                                  
                                </div>

                                <button type="submit" class="btn btn-success pull-left">Inserir</button>
                                <button type="reset"  class="btn btn-success pull-right">Cancelar</button>
                                <div class="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title ">Simple Table</h4>
                <p class="card-category"> Here is a subtitle for this table</p>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead class=" text-primary">
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Salary
                        </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Dakota Rice
                                </td>
                                <td>
                                    Niger
                                </td>
                                <td>
                                    Oud-Turnhout
                                </td>
                                <td class="text-primary">
                                    $36,738
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Minerva Hooper
                                </td>
                                <td>
                                    Curaçao
                                </td>
                                <td>
                                    Sinaai-Waas
                                </td>
                                <td class="text-primary">
                                    $23,789
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Sage Rodriguez
                                </td>
                                <td>
                                    Netherlands
                                </td>
                                <td>
                                    Baileux
                                </td>
                                <td class="text-primary">
                                    $56,142
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    Philip Chaney
                                </td>
                                <td>
                                    Korea, South
                                </td>
                                <td>
                                    Overland Park
                                </td>
                                <td class="text-primary">
                                    $38,735
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    Doris Greene
                                </td>
                                <td>
                                    Malawi
                                </td>
                                <td>
                                    Feldkirchen in Kärnten
                                </td>
                                <td class="text-primary">
                                    $63,542
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    Mason Porter
                                </td>
                                <td>
                                    Chile
                                </td>
                                <td>
                                    Gloucester
                                </td>
                                <td class="text-primary">
                                    $78,615
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>d

