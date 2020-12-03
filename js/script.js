     $(document).ready(function(){

$(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
        
    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2000,
    smartSpeed:500,
    
});

$('.demo').ripples({

    // Image Url
    imageUrl: null,
  
    // The width and height of the WebGL texture to render to. 
    // The larger this value, the smoother the rendering and the slower the ripples will propagate.
    resolution: 256,
  
    // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
    dropRadius: 10,
  
    // Basically the amount of refraction caused by a ripple. 
    // 0 means there is no refraction.
    perturbance: 0.04,
  
    // Whether mouse clicks and mouse movement triggers the effect.
    interactive: true,
  
    // The crossOrigin attribute to use for the affected image. 
    crossOrigin: ''
    
  });
  
  $('#cont1').ScrollSubMenu({

    // jQuery Object | string
    menuTarget : null,
  
    // String [top|middle|bottom] | Number
    lineActive : 'middle',
  
    // String [top|middle|bottom] | Number
    deltaSectionEnd: 'middle',
  
    // default CSS classes & attributes
    subSelector: 'ssm-section',
    animWhileClass: 'ssm-radar',
    activeClass: 'ssm-sub-active',
    pillsActiveClass: 'ssm-pills-active',
    wrapperAttrs: {class: 'ssm-sub-menu'},
    elementAttrs: {class: 'ssm-elmt'},
    pillsAttrs: {class: 'ssm-pills ssm-cn'},
    navPillsAttrs: {class: 'ssm-nav-pills'},
    wrapperCSS: {},
    elementCSS: {},
    pillsCSS: {},
    navPillsCSS: {},
  
    // number
    animWhileDelay: 100,
    animWhileEnd: 1000,
  
    // callback events
    animExitFn: null,
    animEnterFn: null,
    animWhileFn: null,
    clickHandlerFn: null,
    elementCreateCallback: null,
    scrollStepCallback: null,
  
    // options of smooth scroll
    scrollSpeed: 200,
    scrollEasing: 'swing',
    
  });
  
  $('#cont1').ScrollSubMenu({

    // jQuery Object | string
    menuTarget : null,
  
    // String [top|middle|bottom] | Number
    lineActive : 'middle',
  
    // String [top|middle|bottom] | Number
    deltaSectionEnd: 'middle',
  
    // default CSS classes & attributes
    subSelector: 'ssm-section',
    animWhileClass: 'ssm-radar',
    activeClass: 'ssm-sub-active',
    pillsActiveClass: 'ssm-pills-active',
    wrapperAttrs: {class: 'ssm-sub-menu'},
    elementAttrs: {class: 'ssm-elmt'},
    pillsAttrs: {class: 'ssm-pills ssm-cn'},
    navPillsAttrs: {class: 'ssm-nav-pills'},
    wrapperCSS: {},
    elementCSS: {},
    pillsCSS: {},
    navPillsCSS: {},
  
    // number
    animWhileDelay: 100,
    animWhileEnd: 1000,
  
    // callback events
    animExitFn: null,
    animEnterFn: null,
    animWhileFn: null,
    clickHandlerFn: null,
    elementCreateCallback: null,
    scrollStepCallback: null,
  
    // options of smooth scroll
    scrollSpeed: 200,
    scrollEasing: 'swing',
    
  });
        
        
        

       


