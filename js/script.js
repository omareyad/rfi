
function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));  
}

$(window).on("scroll resize", function(){
  var window_offset = inViewport($('.intro')); 
  $(".overlay").height(window_offset/2);
  $(".caption").css("bottom", (window_offset / 3) );
});

/*end js cirve slide show*/


/*query navbar/*/

$( document ).ready(function() {
$('#nav').addClass('glasscolor');
$('.navmob').addClass('glasscolor');
    
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 350) {
        
        
        $('#nav').removeClass('glasscolor');
        $('#nav').addClass('whitecolor');
        $('.navmob').removeClass('glasscolor');
        $('.navmob').addClass('whitecolor');
    } else {
        
       
        $('#nav').addClass('glasscolor');
        $('#nav').addClass('whitecolor');
        $('.navmob').addClass('glasscolor');
        $('.navmob').addClass('whitecolor');
        
    }

    })});



    /* Testmonal section*/
    // for animation 

$(document).ready(function(){
    $('.pp-quote').click(function(){
      $('.pp-quote').removeClass("active");
      $(this).addClass("active");
  });
  });
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-1').addClass('show');
              $('.quote-text-1').removeClass('hide-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-2').addClass('show');             
              $('.quote-text-2').removeClass('hide-bottom');
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');         
              $('.quote-text-3').addClass('show');             
              $('.quote-text-3').removeClass('hide-bottom');
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-4').addClass('show');             
              $('.quote-text-4').removeClass('hide-bottom');
          });
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-5').addClass('show');             
              $('.quote-text-5').removeClass('hide-bottom');
          });
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-6').addClass('show');             
              $('.quote-text-6').removeClass('hide-bottom');
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-7').addClass('show');             
              $('.quote-text-7').removeClass('hide-bottom');
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-8').addClass('show');             
              $('.quote-text-8').removeClass('hide-bottom');
          });
             
      
  });
  
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-1').addClass('look');
              $('.dp-name-1').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-2').addClass('look');
              $('.dp-name-2').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-3').addClass('look');
              $('.dp-name-3').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-4').addClass('look');
              $('.dp-name-4').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-5').addClass('look');
              $('.dp-name-5').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-6').addClass('look');
              $('.dp-name-6').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-7').addClass('look');
              $('.dp-name-7').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-8').addClass('look');
              $('.dp-name-8').removeClass('hide-dp-bottom');             
          });
             
      
  });

  /*Account section flib card and bubles button */
  jQuery(document).ready(function($) {

    //Count nr. of square classes
    var countSquare = $('.square').length;
  
    //For each Square found add BG image
    for (i = 0; i < countSquare; i++) {
      var firstImage = $('.square').eq([i]);
      var secondImage = $('.square2').eq([i]);
  
      var getImage = firstImage.attr('data-image');
      var getImage2 = secondImage.attr('data-image');
  
      firstImage.css('background-image', 'url(' + getImage + ')');
      secondImage.css('background-image', 'url(' + getImage2 + ')');
    }
  
  });
  
  var animateButton = function(e) {
  
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


  /************************loader */
  $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading"); 
    
},
     
     ajaxStop: function() { $body.fadeIn(2000).removeClass('loading');
    }    
});
