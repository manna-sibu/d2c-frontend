$(document).ready(function () {
    // Listen for clicks on the navigation list items
    $('#info_list li').on('click', function () {
      // Get the image source from the clicked item's data attribute
      const selectedImage = $(this).data('image');
      
      // Update the left image
      $('#mainImage').attr('src', selectedImage);

      // Update the active class for navigation
      $('#info_list li').removeClass('active');
      $(this).addClass('active');
    });
  });

$(function () { 
    
    // ACCORDION Toggle (Multiple Items)
    if($('.acc .acc-head').length > 0)
    {
        $('.acc .acc-head').click(function(){
            var parent = $(this).parent();        
            parent.toggleClass('active');
            parent.find('.acc-info').stop().slideToggle();
            parent.siblings().find('.acc-info').hide();
            parent.siblings().removeClass('active');
        }); 
    }    
}); 


// Js for Mobile Navigation
$(function () {
    //Right to Left Open Menu
    if($('.navToggle').length > 0){
        $('.navToggle').on('click', function () {
            $('.mobnav-grid').toggleClass('open-mobile-nav');            
            $('html').toggleClass('hidescroll');
        });
    };   
    
    if($('.menu-item').length > 0) 
    {            
        $(".menu-item").on("click", function(){
            var child=$(this).parent().children("ul");
            $(this).toggleClass("active");
            if(child.length > 0){
                $(child).slideToggle()
            }
        })
    }
});

$(function () {
    /* timeout on hover: big menu */
    var hoverTimeout; //declare timeout
    $('.site-menu li').hover(function() { //mouse enter
        //alert('test')

    clearTimeout(hoverTimeout); //remove timeout, we're taking over control
        $('.site-menu li').removeClass('hover'); //clear all that are hovered
        $(this).parents('li').addClass('hover'); //add class to all our parents

    },
    function() { //mouse leave

        var $this=$(this); //create local copy
            hoverTimeout = setTimeout(function() {
            $this.parents('li').removeClass('hover'); //un-hover all parents
        },2000); //1 second after we remove our mouse

    });
});


// flickity Slider
$(function(){
    // Single Slider
    if($('.singleSlider').length > 0){
        $('.singleSlider').flickity({
            //options            
            cellAlign: 'left',
            wrapAround: true,
            groupCells: "100%",
            contain: true,
            pageDots: true,
            prevNextButtons: true,
            imagesLoaded: true,
            adaptiveHeight: true, 
            draggable: true,
        });
    };

    // Group Slider
    if ($('.group-slider').length > 0) {

        let partnerLogos = false;

        if ($('.group-slider').parents('.brand-logo-grid')) {
            partnerLogos = true;
        }

        $('.group-slider').flickity({
            cellAlign: $(this).find('.logo-item').length < 4 && partnerLogos ? 'center' : 'center',
            wrapAround: false,
            groupCells: true,
            contain: true,
            autoPlay: true,
            autoPlay: 20000,
            pauseAutoPlayOnHover: false,
            pageDots: true,
            prevNextButtons: true,
        });
    }
});



 
   

    
	

