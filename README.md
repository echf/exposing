<!DOCTYPE html>
<html>
    <head>
        <title>x</title>
        <meta name="theme-color" content="#303135">
        <meta property="og:image" content="https://s3.kythi.co/dev/uploads/195ed36c-b057-4d90-a30a-5a6a4c2006c9/fc9fe142-9091-48ae-99c7-221afce33675">
        <!-- Link to the snowstorm.js file -->
        <script src="assets/js/snowstorm.js"></script>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="box">
            <div id="fullscreen-button">Enter</div>
            <video autoplay muted loop id="video" style="display: none;">
                <source src="assets/img/xw1.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="video2" style="pointer-events: none; opacity: 0.6;">
                <source src="assets/img/xw2.mp4" type="video/mp4">
            </video>
            <script>
                var video = document.getElementById('video2');
                video.addEventListener('ended', function() {
                    video.currentTime = 0;
                    video.play();
                });
            </script>
            <div class="content">
                <pre class="ascii">                                            ./%@@@@@@@@@&#(,                                                                                                             
                                                                       ,%@@@@@@@@@@@@@@@@@@@@@(.                                                                                                        
                                                             .*#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/                                                                                                      
                                                        .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,                                                                                                   
                                                      /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,                                                                                                
                                                     .,*//((((/////(&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%(*                                                                                      
                                                                     .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#,                                                                                 
                                                                      .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#,                                                                                  
                                                                      /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&/                                                                              
                                                                      .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                                                                            
                                                                       /%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                                                                          
                                                                        ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/                                                                        
                                                                        .%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*                                                                     
                                                                         .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#,                                                                  
                                                                          ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,                                                                
                                                                           /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.                                                              
                                                                           .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,                                                             
                                                                             *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/                                                           
                                                                              (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@(                                                         
                                                                              /@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%, *@&                                                        
                                                                                .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,  /&.                                                      
                                                                                  ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#. #(                                                      
              .%@(.                                                               .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                        
               .&@@&*  *#,                                                         *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*                                                     
                 .(@@@%&@#                                                          /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(                                                    
                    .(@@@%*                                                          (&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.                                                  
                       ./@@@@%/.                                                      (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                 
                           .#@@@@@%*.                                                  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&/                                               
                               .(&@@@@@&(*.                                            *&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                                             
                                    .(&@@@@@@&#*                                        .,&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                                            
                                          ,/#@@@@@@@&(*.                                  . *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                              
                                                 ,#%@@@@@@@%*.                               ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                                             
                                                       ./&@@@@@&(,                            .#@@#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,,//,./.                                            
                                                            ./&@@@@&*                            /%/&@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,                                                  
                                                                ./&@@@%/                          ./*/@#  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                                                 
                                                                    ,%@@@%/                              .*%@@@@@%(,*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,                                               
                                                                      .(@@@@#*.                       .%@@@@@@@@@@@@@(.(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                              
                               .,,.   ./(.                        ,/(%@@@@@@@@@@%(,            .#@@@@@@@@@@@@@(* .*((%*  ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&/                                            
                                /%@@@@@@@%*           ..*(#&@@@@@@@@@@@@@@&@@@@@@@@@@@@@@@%@@@@&%#(*..*&@@@%/.      *(.    ./@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                                          
                                    .,/#%&@@@@@@@@@@@@@@@@@&%(*,                      .*#&@@@@@@@@@@&&&@@@&###(((((/*,.       ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                         
                                               .,,,,.                                        .*/#&@@@@@@@@@@@@@@@@@@@@@@@@@@@&(/*,(&@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                                       
                                                                                                                           ,*(%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                      
                                                                                                                                   .,(@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.                                    
                                                                                                                                      /@@@@@@@@@@@@@@@@@@@@@@@@@@@&,                                    
                                                                                                                                       (@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*                                  
                                                                                                                                        /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(.                               
                                                                                                                                         *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.                              
                                                                                                                                          *@@@@@@@@@@@@@@@@@@@@@@@@@@%.#@@&,                            
                                                                                                                                           /&@@@@@@@@@@@@@@@@@@@@@@@@@@#.                               
                                                                                                                                            (@@@@@@#/@@@@@&&@@@@@@@@@@@@@@%(.                           
                                                                                                                                             %@@@@@@/*@@@@&, .,%@@(/#, .*%@@@@@@&#/,                    
                                                                                                                                              ,%@@@@%,#@@@@@/    ,(*         .*#&@@@@@@@(               
                                                                                                                                                *&@@&/.%@@@@@/                      ...                 
                                                                                                                                                 ./@@#  /@%.*%,                                         
                                                                                                                                                   .%&    ,.                                            
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                             
      </pre>
                <pre class="pre2">
                    <div class="names">
                        <a class="name x">
                            <a href="https://feds.lol/homophobe">X</a>
                            <a href="https://vare.dev/sexcrew">Fraud</a>
                            <a href="https://coresec.lol">Coresec</a>
                    </div>
                </pre>
            </div>
            <script src="assets/js/main.js"></script>
    </body>
</html>
