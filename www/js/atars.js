      document.addEventListener("deviceready", onDeviceReady, false);
      // PhoneGap esta listo
      function onDeviceReady() {
        
        
        //DIV DEL MENU
        menuDiv = document.querySelector("#menu"); 
        //BOTON MENU ANDROID
        document.addEventListener("menubutton", onMenuKeyDown, false);  
        //BOTON ATRAS ANDROID
        document.addEventListener("backbutton", onBackKeyDown, false);
        
      }  
      
      //BOTON MENU
      var menuOpen = true;
      var menuDiv = "";
      
      function onMenuKeyDown() {
        if(menuOpen) {
                    console.log("close the menu");
                    menuDiv.style.display="block";
                    menuOpen = false;
                } else {
                        console.log("open the menu");
                        menuDiv.style.display="none";
                        menuOpen = true;
                }
      }
      //FIN BOTON MENU
      
      //BOTON ATRAS ANDROID
      function onBackKeyDown(){
        //if($.mobile.activePage.attr('id') == 'home'){ // PARA AÑADIR MAS USAR SEPARADORES "||"
         // navigator.notification.confirm(
         // '¿Salir de la aplicación?', 
         // function(button) {
         //   if (button == 2) {
         //     navigator.app.exitApp();
        //    }
        //  }, 
        //  'Salir', 'No,Si');return false;
      //  }
      //  else {                            //else if ($.mobile.activePage.attr('id') == 'charlas'){
                                        //$.mobile.changePage('#home');
                                          //}else
        history.go(-1);
       // }
      }
      //FIN BOTON ATRAS ANDROID