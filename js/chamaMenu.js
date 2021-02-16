$(document).ready(function(){
   var statusMenu = 0;
   $('.chamaResponsivo').click(function(event){
      if(statusMenu == 1){
         $('.menuResponsivo').animate({left:"-75%"}, 1000 );
         statusMenu = 0;
      
      }else{
         $('.menuResponsivo').animate({left:0}, 1000);
         statusMenu =  1;
         
      }
   })
})