﻿<!DOCTYPE html>
<html>
  <head>
    <title>Guest book</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        canvas {
            //border: solid 5px #228b22;
            //margin: 0px;
            //margin-bottom: 10px;
        }

        div {
            //border: solid 1px #228b22;
        }

    </style>

    <!-- Bootstrap -->
    <link href="global/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span5">

            <div class="well" id="messages"></div>

            <div class="navbar-inner navbar-form">
                <div id="captchaDiv"></div>
                <!-- 
                <div class="alert alert-error">
                  ...
                </div>
                <div class="alert alert-success">
                  ...
                </div> -->
                <!-- 
                <div class="progress progress-striped active">
                  <div class="bar" style="width: 40%;"></div>
                </div>
                 -->
                <div class="input-append">
                  <input  class="span12" placeholder="Новое сообщение" id="newMessageInput" type="text">
                  <button class="btn btn-primary" id="newMessageBtn" type="button">    Go!</button>
                </div>


            </div>
        <div class="span4">
            
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div id="myModal" class="modal hide fade" tabindex="-1" data-keyboard=false data-backdrop=false role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-header">
        <h3 id="myModalLabel">Please wait...</h3>
      </div>
      <div class="modal-body">
        <div class="progress progress-striped active">
          <div class="bar" style="width: 40%;"></div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>

    <script src="./global/js/ArmEngine/lib/stats.js/build/stats.min.js"></script>
    <script src="./global/js/ArmEngine/lib/Gizmo/gizmo.js"></script>
    <script src="./global/js/ArmEngine/lib/Sylvester-0-1-3/sylvester.js"></script>

    <script src="./global/js/ArmEngine/armengine.js"></script>

    <script src="./global/js/classes/Captcha.js"></script>
    <script src="./global/js/classes/Map.js"></script>
    <script src="./global/js/classes/Item.js"></script>
    
    <script src="./global/js/main.js"></script>

    <script src="./global/js/jquery.js"></script>
    <script src="./global/bootstrap/js/bootstrap.min.js"></script>

  </body>
</html>