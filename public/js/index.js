    //var socket = io();

   // socket.on('connect', function (){
   //     console.log('Connected to server');
   // });


    jQuery('#contactForm').on('submit', function(e){
         e.preventDefault();
         var error = "";
        if($("#exampleInputEmail1").val()==""){
            error+= "Please enter a email<br>";
        }
            
        if($("#example1").val()==""){
            error+= "Please enter a name<br>";
        }
            
        if($("#exampleFormControlTextarea1").val()==""){
            error+= "Please enter a message";
        }
            
        if(error != ""){
            $("#error").html('<div class="alert alert-dark" role="alert"><p><strong>There were error(s) in your form:</strong><p>' + error + '</div>');
        }else{
            $("form").unbind("submit").submit();
        }
    });

    
        